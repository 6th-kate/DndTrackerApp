import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import PlayableCharacterModel from "../../models/PlayableCharacterModel";
import NPC from "../cards/master/NPCCard";
import CharacterCard from "../cards/master/CharacterCard";

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

});


function GameScreen({ route, navigation }) {
  let { characters } = route.params;

  const [charactersState, setCharactersState] = useState([...characters]);

  const addNPC = () => {
    navigation.navigate("NonPlayableCharacterInputScreen",
     {data: charactersState, setData: setCharactersState});
  }

  const chComp = charactersState.map(ch => {
      if (ch instanceof PlayableCharacterModel) return (
      <View style={styles.gameContainer}>
        <CharacterCard character={ch} charactersState={charactersState} setCharactersState={setCharactersState}/>
      </View>
      );
      return (
        <View style={styles.gameContainer}>
            <NPC props={ch} />
        </View>
      );
    }
  )

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        {chComp}
      </ScrollView>
    <TouchableOpacity
        style={styles.button}
        onPress={addNPC}
      >
        <MaterialCommunityIcons name="sword-cross" size={36} color='white' />
      </TouchableOpacity>
    </View>
  );
}

export default GameScreen;