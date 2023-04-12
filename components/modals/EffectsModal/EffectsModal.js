import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Modal } from "react-native";
import React from "react";
import DndEffects from "../../../models/DndEffects";
import EffectToggle from "./EffectToggle";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    backColor: {
        backgroundColor: 'rgba(98, 98, 98, 0.5)',
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        marginBottom: 10,
        margin: 5,
        width: screenWidth-10,
        borderRadius: 10,
        backgroundColor: 'rgba(28, 28, 30, 1)',
        padding: 13,
    },
    effectsFlex: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 10,
    },
    returnButton: {
        height: 40,
        borderWidth: 1,
        borderColor: "#989899",
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    returnLabel: {
        fontSize: 20,
        color: "#989899"
    },
    addButton: {
        height: 40,
        backgroundColor: "#383841",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    addLabel: {
        fontSize: 20,
        color: "#FFFFFF"
    },
    endButtonsContainer: {
        padding: 5,
        paddingTop: 10,
        gap: 10
    },
})

function EffectsModal(props) {
    const effects = Object.keys(DndEffects);
    const [effectsState, setEffectsState] = React.useState([...(new Array(effects.length).fill(false))]);

    const effComp = effects.map(ef => <EffectToggle item={DndEffects[ef]}
         index={effects.indexOf(ef)} data={effectsState} setData={setEffectsState}/>);
    
    function getAllIndexes(arr, val) {
        const indexes = [];
        for(let i = 0; i < arr.length; i+=1) {
            if (arr[i] === val)
                indexes.push(i);
        }
        return indexes;
    }

    const getEffects = () => {
        const indexes = getAllIndexes(effectsState, true);
        return indexes.map (i=>DndEffects[effects[i]]);
    };
    
    return (
        <Modal isVisible={props.isModalVisible}
               transparent={true}
               animationType="slide"
               onRequestClose={props.goBack}>
            <View style={styles.backColor}>
                <View style={styles.container}>
                    <View style={styles.effectsFlex}>
                        {effComp}
                    </View>
                    <View style={styles.endButtonsContainer}>
                        <TouchableOpacity onPress={props.goBack} style={styles.returnButton}>
                           <Text style={styles.returnLabel}>Отмена</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {props.addEffects(getEffects())}} style={styles.addButton}>
                            <Text style={styles.addLabel}>Добавить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default EffectsModal;
