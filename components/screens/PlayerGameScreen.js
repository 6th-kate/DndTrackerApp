import { StyleSheet, View, ScrollView, } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import React from 'react';
import CharacterCardPlayer from '../cards/player/CharacterCardPlayer';
import NPCCardPlayer from '../cards/player/NPCCardPlayer';
import PlayerTabbar from '../tabbars/PlayerTabbar';
import socket from '../../utils/socket';

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    backgroundColor: '#000',
    flex: 1,
  },
  gameContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0
  },
  scroll: {
    backgroundColor: '#000',
  },
  scrollContainer: {
    flex: 1,
  },
  tabbarContainer: {
    justifyContent: "flex-end",
  },
  marginContainer: {
    margin: 5,
    marginBottom: 15,
  },
});

function PlayerGameScreen({ route, navigation }) {
  let { characters, code } = route.params;

  const [charactersState, setCharactersState] = React.useState([...characters]);

  React.useEffect(() => {
    socket.on("refreshedCharacters", (newCharacters) => setCharactersState(newCharacters));
    console.log("player characters")
    console.log(charactersState)
  }, [socket]);

  React.useEffect(() => {
    socket.on("gameDeleted", () => {
      navigation.goBack();
      socket.emit("leaveGame", code);
    });
  }, [socket, code, navigation])

  const chComp = charactersState.map(ch => {
      if (ch.insight !== undefined) {
        console.log(ch)
        console.log(ch.hasCurrentTurn)
        if (ch.hasCurrentTurn) {
          return (
            <View style={styles.gameContainer}>
              <View style={styles.marginContainer}>
                <Shadow distance={10} radius={20} offset={[0, 0]} startColor='rgba(176, 176, 176, 0.25)'>
                  <Shadow distance={10} radius={20} offset={[-4, -4]} startColor='rgba(189, 50, 50, 0.25)'>
                    <Shadow distance={10} radius={20} offset={[4, 4]} startColor='rgba(48, 53, 178, 0.25)'>
                      <CharacterCardPlayer character={ch}/>
                    </Shadow>
                  </Shadow>
                </Shadow>
              </View>
            </View>
          );
        }
        return (
          <View style={styles.gameContainer}>
            <View style={styles.marginContainer}>
              <CharacterCardPlayer character={ch}/>
            </View>
          </View>
        );
      } 
      if (ch.hasCurrentTurn) {
        return (
          <View style={styles.gameContainer}>
            <View style={styles.marginContainer}>
              <Shadow distance={10} radius={20} offset={[0, 0]} startColor='rgba(176, 176, 176, 0.25)'>
                <Shadow distance={10} radius={20} offset={[-4, -4]} startColor='rgba(189, 50, 50, 0.25)'>
                  <Shadow distance={10} radius={20} offset={[4, 4]} startColor='rgba(48, 53, 178, 0.25)'>
                    <NPCCardPlayer character={ch}/>
                  </Shadow>
                </Shadow>
              </Shadow>
            </View>
          </View>
        );
      }
      return (
        <View style={styles.gameContainer}>
          <View style={styles.marginContainer}>
            <NPCCardPlayer character={ch} />
          </View>
        </View>
      );
  })

  const goBack = () => {
    navigation.goBack();
    socket.emit("leaveGame", code);
    // отключаемся от сессии, выходим из комнаты
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll}>
            {chComp}
        </ScrollView>
      </View>  
      <View style={styles.tabbarContainer}>
        <PlayerTabbar code={code} goBack={goBack}/>
      </View>
    </View>
  );
}

export default PlayerGameScreen;