import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import EffectsModal from '../../modals/EffectsModal/EffectsModal';
import PlayableCharacterModel from '../../../models/PlayableCharacterModel';

const styles = StyleSheet.create({
    btn: {
        width: 54,
        height: 32,
        tintColor: 'white',
        backgroundColor: 'rgba(56, 56, 65, 1)',
        borderRadius: 56,
        justifyContent: "center",
        alignItems: "center",
    },

    btnText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
    },

    state: {
        position: 'relative',
        height: 32,
        backgroundColor: 'rgba(56, 56, 65, 1)',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 8,
    },

    stateValue: {
        position: 'relative',
        height: 32,
        backgroundColor: 'rgba(56, 56, 65, 1)',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 20,
        marginRight: 20,
    },

    stateValueText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 32,
    },

    value: {
        height: 32,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 8,
        lineHeight: 32,
        position: 'absolute',
        top: 0,
        right: -20,
    },

    valueText: {
        color: 'rgba(56, 56, 65, 1)',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 32,
    },

    field: {
        height: 'auto',
        paddingBottom: 10,
        marginBottom: 13,
        backgroundColor: 'rgba(21, 21, 22, 1)',
        borderRadius: 12,
        justifyItems: 'end'
    },

    fieldLabel: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 400,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'rgba(90, 90, 94, 1)'
    },

    flexHorizontal: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        gap: 6,
        paddingLeft: 5
    }
})




function PlusButton(props) {
    return (
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
    );
}

function StateValue(props) {
    return (
        <View style={styles.stateValue}>
            <Text style={styles.stateValueText}>{props.name}</Text>
            <View style={styles.value}>
                <Text style={styles.valueText}>{props.value}</Text>
            </View>
        </View>
    );
}

function State(props) {
    return (
        <TouchableOpacity style={styles.state} onPress={props.onPress}>
            <Text style={styles.stateValueText}>{props.name}</Text>
        </TouchableOpacity>
    );
}

// <Conditions character={characterState} setCharacter={setCharacterState} 
// charactersState={props.data} setCharactersState={props.setData}/>
function Conditions(props) {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

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

    const removeEffect = (effect) => {
        const indexCharacter = props.charactersState.indexOf(props.character);
        const index = props.character.effects.indexOf(effect);
        const newArray = [...props.charactersState];
        const newCharacter = props.character;
        if (index > -1) { 
            newArray[indexCharacter].effects.splice(index, 1);
        }
        props.setCharactersState(newArray);
        props.setCharacter(newCharacter);
        props.refreshCharacters(newArray);
    }

    const onPlusPress = () => {
        setIsModalVisible(!isModalVisible);
    }
    const goBack = () => {
        setIsModalVisible(!isModalVisible);
    }
    const addEffects = (effects) => {
        const index = props.charactersState.findIndex(deepCompare);
        const newCharacter = props.character;
        newCharacter.effects = [...props.character.effects]; 

        const newArray = [...props.charactersState];
        newArray[index] = newCharacter;   

        effects.forEach(element => {
            if (newArray[index].effects.indexOf(element) < 0) {
                newArray[index].effects.push(element);
            }
        });
        props.setCharactersState(newArray); 
        props.setCharacter(newCharacter);
        props.refreshCharacters(newArray);
        setIsModalVisible(!isModalVisible);
    }
    // <Conditions character={props.character} charactersState={props.charactersState} setCharactersState={props.setCharactersState}/>
    
    const cond = props.character.effects.map(st => <State name={st.nameRu} onPress={() => removeEffect(st)}/>)
    
    return (
        <View style={styles.field}>
            <Text style={styles.fieldLabel}>Состояния</Text>
            <View style={styles.flexHorizontal}>
                {cond}
                <PlusButton onPress={onPlusPress}/>
            </View>
            {isModalVisible && <EffectsModal goBack={goBack} addEffects={addEffects} isModalVisible={isModalVisible}/>}
        </View>
    );
}

export default Conditions;