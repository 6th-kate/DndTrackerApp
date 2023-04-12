import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import React from 'react';
import Conditions from '../common/Conditions';
import Concentration from '../common/Concentration';
// import React, { useState } from 'react';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
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
    numberInputBox: {
        borderColor: '#383841',
        borderWidth: 1,
        borderRadius: 9,
        margin: 5,
        alignItems: "center",
    },
    numberInputLabel: {
        color: '#989899',
    },
    numberInput: {
        fontSize: 36,
        color: "#FFFFFF"
    },
});


function CharacterInitiativeCard(props) {
    const [characterState, setCharacterState] = React.useState(props.character);
    return (
        <View style={styles.card}>
            <Text style={styles.label}>{characterState.name}</Text>
            <Conditions character={characterState} setCharacter={setCharacterState} charactersState={props.data} setCharactersState={props.setData} refreshCharacters={props.refreshCharacters}/>
            <Concentration character={characterState} setCharacter={setCharacterState} charactersState={props.data} setCharactersState={props.setData} refreshCharacters={props.refreshCharacters}/>
        </View>
    );
  }

  export default CharacterInitiativeCard;

