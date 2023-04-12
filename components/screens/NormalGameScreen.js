import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import CharacterCard from "../cards/master/CharacterCard";
import NormalGameTabbar from '../tabbars/NormalGameTabbar';
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
        marginBottom: 45,
    },
    scrollContainer: {
        flex: 1,
    },
    tabbarContainer: {
        justifyContent: "flex-end",
    },
});


function NormalGameScreen({ route, navigation }) {
  let { characters, code } = route.params;

  const [charactersState, setCharactersState] = React.useState([...characters]);

  const notifyRefreshCharacters = (charactersList) => {
    socket.emit("refreshCharacters", charactersList, code);
  }

  const chComp = charactersState.map(ch => 
    <View style={styles.gameContainer}>
      <CharacterCard character={ch} charactersState={charactersState} setCharactersState={setCharactersState} refreshCharacters={notifyRefreshCharacters}/>
    </View>
  )

  const goBack = () => {
    socket.emit("deleteGame", code);
    navigation.goBack();
    navigation.goBack();
  }

  const goToInitiative = () => {
    // navigate to initiative screen
    navigation.navigate("InitiativeGameScreen", {characters: characters, code: code})
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll}>
            {chComp}
        </ScrollView>
      </View>  
      <View style={styles.tabbarContainer}>
        <NormalGameTabbar code={code} goBack={goBack} goToInitiative={goToInitiative}/>
      </View>
    </View>
  );
}

export default NormalGameScreen;