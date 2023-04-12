import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import PlayableCharacterModel from '../../../models/PlayableCharacterModel';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    concentrationActive: {
        alignSelf: 'center',
        paddingVertical: 5,
        borderRadius: 35,
        backgroundColor: '#76B041',
        margin: 10,
        width: screenWidth-30,
        justifyContent: "center",
        alignItems: "center",
    },
    concentrationInactive: {
        alignSelf: 'center',
        paddingVertical: 5,
        borderRadius: 35,
        backgroundColor: '#2A2A2F',
        margin: 10,
        width: screenWidth-30,
        justifyContent: "center",
        alignItems: "center",
    },
    labelActive: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    labelInactive: {
        fontSize: 16,
        color: '#8D8D8E',
    }
})

function Concentration(props) {
    const deepCompare = (ch) => {
        if (ch instanceof PlayableCharacterModel) {
            if (ch.name === props.character.name &&
                ch.languages === props.character.languages &&
                ch.insight === props.character.insight &&
                ch.perception === props.character.perception &&
                ch.investigation === props.character.investigation) return true;
            return false;
        }
        if (ch.name === props.character.name &&
            ch.armor === props.character.armor &&
            ch.health === props.character.health) return true;
        return false;
    }

    const switchConcentration = () => {
        const index = props.charactersState.findIndex(deepCompare);
        const newArray = [...props.charactersState];
        newArray[index].concentration = !props.character.concentration;
        props.setCharactersState(newArray);

        const newCharacter = props.character;
        newCharacter.concentration = props.character.concentration;
        props.setCharacter(newCharacter);

        props.refreshCharacters(newArray);
    }
    return (
        <TouchableOpacity style={props.character.concentration?  styles.concentrationActive : styles.concentrationInactive}
                          onPress={switchConcentration}>
            <Text style={props.character.concentration? styles.labelActive : styles.labelInactive}>Концентрация</Text>
        </TouchableOpacity>
    );
}

export default Concentration; 