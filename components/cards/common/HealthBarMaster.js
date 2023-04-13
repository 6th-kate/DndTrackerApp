import { View, StyleSheet, Text, TextInput } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PlayableCharacterModel from '../../../models/PlayableCharacterModel';

const styles = StyleSheet.create({
    main: {
        //flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        height: 80,
    },

    healthBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        backgroundColor: 'rgba(21, 21, 22, 1)',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#383841',
    },

    healthHighText: {
        fontSize: 50,
        color: '#76B041',
        paddingLeft: 5
    },

    healthMiddleText: {
        fontSize: 50,
        color: '#BFAA3B',
        paddingLeft: 5
    },

    healthLowText: {
        fontSize: 50,
        color: '#B04141',
        paddingLeft: 5
    },

    armorView: {
        paddingTop: 5,
        paddingLeft: 10
    },

    armorText: {
        fontSize: 20,
        color: 'white',
        position: 'absolute',
        top: 18,
        left: 24
    },
})

function HealthInput(props) {
    const [firState, setFirState] = React.useState(props.character.health);

    const deepCompare = (ch) => {
        if (ch instanceof PlayableCharacterModel) {
            return false;
        }
        if (ch.name === props.character.name &&
            ch.armor === props.character.armor &&
            ch.health === props.character.health) return true;
        return false;
    }
    
    const calculateColor = (val) => {
        if (val > props.character.initialHealth * 2 / 3) {
            return '#76B041';
        }
        if (val > props.character.initialHealth / 3) {
            return '#BFAA3B';
        }
        return '#B04141';
    }

    const calculateStyle = (val) => {
        if (val > props.character.initialHealth * 2 / 3) {
            return styles.healthHighText;
        }
        if (val > props.character.initialHealth / 3) {
            return styles.healthMiddleText
        }
        return styles.healthLowText;
    }

    return (
        <View style={styles.healthBox}>
            <MaterialCommunityIcons name="heart" color={calculateColor(props.character.health)} size={30} paddingTop={15} />
            <TextInput style={calculateStyle(props.character.health)}
                       keyboardType="numeric"
                       placeholder="0"
                       placeholderTextColor="#989899"
                       value={firState}
                       maxLength={6}
                       onChangeText={val => {
                        const text = val.replace(/[^0-9]/g, '')
                        setFirState(text);
                        const index = props.data.findIndex(deepCompare);
                        const newArray = [...props.data];
                        newArray[index].health = val === "" ? 0 : val;
                        props.setData(newArray); 
                        const newCharacter = props.character;
                        newCharacter.health = val === "" ? 0 : val;
                        props.setCharacter(newCharacter);
                        props.refreshCharacters(newArray);
                    }}/>
        </View>
    );
}

function Armor(props) {
    return (
        <View style={styles.armorView}>
            <MaterialCommunityIcons name="shield" color={'rgba(56, 56, 65, 1)'} size={50}/>
            <Text style={styles.armorText}>{props.armor}</Text>
        </View>
    );
}

function HealthBarMaster(props) {
    return (
        <View style={styles.main}>
            <HealthInput character={props.character} setCharacter={props.setCharacter} data={props.charactersState} setData={props.setCharactersState} refreshCharacters={props.refreshCharacters}/>
            <Armor armor={props.character.armor}/>
        </View>
    );
}

export default HealthBarMaster;