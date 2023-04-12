import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import NonPlayableCharacterInput from "../modals/NonPlayableCharacterInput";
import NonPlayableCharacterModel from "../../models/NonPlayableCharacterModel";

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 50,
        backgroundColor: '#000',
        flex: 1,
    },
    returnButton: {
        height: 40,
        borderWidth: 1,
        borderColor: "#989899",
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
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
    contentContainer: {
        flex: 1,
    },
});

function NonPlayableCharacterInputScreen({ route, navigation }) {
    const { data, setData } = route.params;

    const [npcState, setNPCState] = useState(new NonPlayableCharacterModel("", 0, 0, 0));
 
    const addElementAndReturn = () => {
        const newArray = [...data, npcState];
        setData(newArray);
        navigation.goBack()
    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <NonPlayableCharacterInput data={npcState} setData={setNPCState}/>
            </View>
            <View style={styles.endButtonsContainer}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={addElementAndReturn}>
                    <Text style={styles.addLabel}>Добавить</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.returnButton}
                    onPress={goBack}>
                    <Text style={styles.returnLabel}>Отмена</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NonPlayableCharacterInputScreen;