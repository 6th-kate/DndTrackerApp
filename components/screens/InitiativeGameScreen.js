import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import PlayableCharacterModel from "../../models/PlayableCharacterModel";
import NPC from "../cards/master/NPCCard";
import InitiativeGameTabbar from '../tabbars/InitiativeGameTabbar';
import NonPlayableCharacterInput from '../modals/NonPlayableCharacterInput';
import CharacterInitiativeCard from '../cards/master/CharacterInitiativeCard';
import InitiativeInput from '../cards/master/InitiativeInput';
import Alert from '../modals/Alert';
import socket from '../../utils/socket';

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    backgroundColor: '#000',
    flex: 1,
  },
  marginContainer: {
    margin: 5,
    marginBottom: 15,
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
    marginBottom: 100,
  },
  scrollContainer: {
    flex: 1,
  },
  button: {
    position: "absolute",
    top: 700,
    right: 15,
    borderRadius: 50,
    backgroundColor: "rgba(56, 56, 65, 1)",
    width: 50,
    height: 50,
    paddingLeft: 7,
    paddingTop: 6,
  },
  tabbarContainer: {
    justifyContent: "flex-end",
},
});


function InitiativeGameScreen({ route, navigation }) {
  let { characters, code } = route.params;

  const [charactersState, setCharactersState] = React.useState([...characters]);
  const [roundState, setRoundState] = React.useState(0);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [characterTurnState, setCharacterTurnState] = React.useState(undefined);
  const [isErrModalVisible, setIsErrModalVisible] = React.useState(false);

  const chFilled = characters.map(ch => false);
  const [filledState, setFilledState] = React.useState([...chFilled]);

  const notifyRefreshCharacters = (charactersList) => {
    socket.emit("refreshCharacters", charactersList, code);
  }

  const passRefreshCharacters = (charactersList) => {
    // just don't do any refreshing
  }

  const createNPC = () => {
    setIsModalVisible(!isModalVisible);
  }

  const goBack = () => {
    setIsModalVisible(!isModalVisible);
  }

  const closeAlert = () => {
    setIsErrModalVisible(!isErrModalVisible);
  }

  function compareFn(a, b) {
    return b.initiative - a.initiative;
  }

  const addNPC = (newNPC) => {
    const newArray = [...charactersState, newNPC];
    if (roundState !== 0) {
      newArray.sort(compareFn);
      socket.emit("refreshCharacters", newArray, code);
    }
    setCharactersState(newArray);
    setIsModalVisible(!isModalVisible);
  }

  const returnToNormalGame = () => {
    // notify all users that initiative mode has ended
    characters.forEach(ch => {
      ch.hasCurrentTurn = false;
      ch.concentration = false;
    });
    socket.emit("refreshCharacters", characters, code);
    navigation.goBack();
  }

  const chComp = charactersState.map(ch => {
    if (ch instanceof PlayableCharacterModel) {
      if (ch.hasCurrentTurn) {
        return (
          <View style={styles.gameContainer}>
            <View style={styles.marginContainer}>
              <Shadow distance={10} radius={20} offset={[0, 0]} startColor='rgba(176, 176, 176, 0.25)'>
                <Shadow distance={10} radius={20} offset={[-4, -4]} startColor='rgba(189, 50, 50, 0.25)'>
                  <Shadow distance={10} radius={20} offset={[4, 4]} startColor='rgba(48, 53, 178, 0.25)'>
                    <CharacterInitiativeCard character={ch} data={charactersState} setData={setCharactersState} refreshCharacters={notifyRefreshCharacters}/>
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
            <CharacterInitiativeCard character={ch} data={charactersState} setData={setCharactersState} refreshCharacters={notifyRefreshCharacters}/>
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
                  <NPC character={ch} data={charactersState} setData={setCharactersState} refreshCharacters={notifyRefreshCharacters}/>
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
          <NPC character={ch} data={charactersState} setData={setCharactersState} refreshCharacters={notifyRefreshCharacters}/>
        </View>
      </View>
    );
  })

  const chInInput = charactersState.map(ch => {
    if (ch instanceof PlayableCharacterModel) {
      return (
        <View style={styles.gameContainer}>
          <InitiativeInput character={ch} data={charactersState} setData={setCharactersState} refreshCharacters={passRefreshCharacters} filled={filledState} setFilled={setFilledState}/>
        </View>
      )
    }
    return (
      <View style={styles.gameContainer}>
        <View style={styles.marginContainer}>
          <NPC character={ch} data={charactersState} setData={setCharactersState} refreshCharacters={passRefreshCharacters}/>
        </View>
      </View>
    )
  })

  const nextTurn = () => {
    if (roundState === 0) {
      if (filledState.every(element => element === true)) {
        const newArray = [...charactersState];
        newArray.sort(compareFn);
        newArray[0].hasCurrentTurn = true;
        setCharactersState(newArray);
        setRoundState(1);
        setCharacterTurnState(newArray[0]);
        socket.emit("refreshCharacters", newArray, code);
      }
      else {
        setIsErrModalVisible(!isErrModalVisible);
      }
    }
    else {
      const index = charactersState.indexOf(characterTurnState);
      if (index < charactersState.length - 1) {
        const newArray = [...charactersState];
        newArray[index].hasCurrentTurn = false;
        newArray[index + 1].hasCurrentTurn = true;
        setCharactersState(newArray);
        setCharacterTurnState(charactersState[index + 1]);
        socket.emit("refreshCharacters", newArray, code);
      }
      else {
        const newArray = [...charactersState];
        newArray[index].hasCurrentTurn = false;
        newArray[0].hasCurrentTurn = true;
        setCharactersState(newArray);
        setCharacterTurnState(charactersState[0]);
        setRoundState(roundState + 1);
        socket.emit("refreshCharacters", newArray, code);
      }
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll}>
          {roundState === 0 ? chInInput : chComp}
        </ScrollView>
      </View>
      <View style={styles.tabbarContainer}>
        <InitiativeGameTabbar addNPC={createNPC} toNormalGame={returnToNormalGame}
          roundNumber={roundState} nextTurn={nextTurn}/>
      </View>
      {isModalVisible && <NonPlayableCharacterInput isModalVisible={isModalVisible} goBack={goBack} addNPC={addNPC}/>}
      {isErrModalVisible && <Alert goBack={closeAlert} message="Не все поля инициативы заполнены!" isModalVisible={isModalVisible}/>}
    </View>
  );
}

export default InitiativeGameScreen;