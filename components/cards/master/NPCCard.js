import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Concentration from '../common/Concentration';
import HealthBarMaster from '../common/HealthBarMaster';
import Conditions from '../common/Conditions';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        //marginBottom: 15,
        width: screenWidth-10,
        borderRadius: 10,
        backgroundColor: 'rgba(28, 28, 30, 1)',
        color: 'white',
        padding: 13
      },
    label: {
        fontSize: 24,
        color: "#FFFFFF",
        paddingBottom: 7
    },

    concentration: {
        alignSelf: 'center',
        fontSize: 24,
        color: '#8D8D8E',
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#2A2A2F',
        
        paddingHorizontal: 40,
        overflow:"hidden"
    }
})

function NPC(props) {
  const [characterState, setCharacterState] = React.useState(props.character);
  return (
      <View style={styles.card}>
        <Text style={styles.label}>{props.character.name}</Text>
        <HealthBarMaster character={characterState} setCharacter={setCharacterState} charactersState={props.data} setCharactersState={props.setData} refreshCharacters={props.refreshCharacters}/>
        <Conditions character={characterState} setCharacter={setCharacterState} charactersState={props.data} setCharactersState={props.setData} refreshCharacters={props.refreshCharacters}/>
        <Concentration character={characterState} setCharacter={setCharacterState} charactersState={props.data} setCharactersState={props.setData} refreshCharacters={props.refreshCharacters}/>
      </View>
  );
}

export default NPC;
