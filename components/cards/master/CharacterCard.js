import { View, StyleSheet, Text, Dimensions } from 'react-native';
import React from 'react';
import Conditions from '../common/Conditions';
import Languages from '../common/Languages';
import Stats from '../common/Stats';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
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
    }
})

function CharacterCard(props) {
  const [characterState, setCharacterState] = React.useState(props.character);
  return (
      <View style={styles.card}>
        <Text style={styles.label}>{props.character.name}</Text>
        <Conditions character={characterState} setCharacter={setCharacterState} charactersState={props.charactersState} setCharactersState={props.setCharactersState} refreshCharacters={props.refreshCharacters}/>
        <Stats props={props.character}/>
        <Languages name="Языки" languages = {props.character.languages} />
      </View>
  );
}

export default CharacterCard;
