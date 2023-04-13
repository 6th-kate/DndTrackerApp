import { StyleSheet, Text, View, TextInput, Dimensions, } from 'react-native';
import React from 'react';
import Conditions from '../common/Conditions';
import PlayableCharacterModel from '../../../models/PlayableCharacterModel';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        margin:5,
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


function InitiativeInput(props) {
    const [characterState, setCharacterState] = React.useState(props.character);
    const [firState, setFirState] = React.useState("");

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

    return (
        <View style={styles.card}>
            <Text style={styles.label}>{props.character.name}</Text>
            <View style={styles.numberInputBox}>
                <TextInput 
                    keyboardType="numeric"
                    style={styles.numberInput}
                    placeholder="0"
                    placeholderTextColor="#989899"
                    maxLength={2}
                    value={firState}
                    onChangeText={val => {
                        const text = val.replace(/[^0-9]/g, '')
                        setFirState(text);
                        const index = props.data.findIndex(deepCompare);
                        const newArray = [...props.data];
                        newArray[index].initiative = text;
                        props.setData(newArray); 
                        const newCharacter = characterState;
                        newCharacter.initiative = text;
                        setCharacterState(newCharacter);
                        if (text.trim()) {
                            const newParentsFilled = [...props.filled];
                            newParentsFilled[index] = true;
                            props.setFilled(newParentsFilled);
                        }
                        else {
                            const newParentsFilled = [...props.filled];
                            newParentsFilled[index] = false;
                            props.setFilled(newParentsFilled);
                        }
                    }}
                />
                <Text style={styles.numberInputLabel}>Инициатива</Text>
            </View>
            <Conditions character={characterState} setCharacter={setCharacterState} charactersState={props.data} setCharactersState={props.setData}/>
        </View>
    );
  }

  export default InitiativeInput;

