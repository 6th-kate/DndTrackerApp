import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Modal } from 'react-native';
import NonPlayableCharacterModel from '../../models/NonPlayableCharacterModel';
import Alert from "./Alert";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    backColor: {
        backgroundColor: 'rgba(98, 98, 98, 0.5)',
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },
    mainContainer: {
        width: screenWidth - 10,
        backgroundColor: '#151516',
        margin: 5,
        borderRadius: 10,
        paddingBottom: 20,
    },
    languagesContainer: {
        width: '100%',
        padding: 10,
    },
    statsContainer: {
        width: '100%',
        padding: 10,
    },
    inputLabel: {
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    additionalInfoLabel: {
        fontSize: 16,
        color: '#8D8D8E',
        alignSelf: "center",
        margin: 5, 
        marginTop: 10,
    },
    textInput: {
        borderRadius: 9,
        borderColor: '#383841',
        borderWidth: 1,
        backgroundColor: '#151516',
        width: screenWidth - 10 - 20,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
        color: "#FFFFFF",
        fontSize: 20,
    },
    numberInputBox: {
        borderColor: '#383841',
        borderWidth: 1,
        borderRadius: 9,
        margin: 10,
        alignItems: "center",
    },
    numberInputLabel: {
        color: '#989899',
    },
    numberInput: {
        fontSize: 36,
        color: "#FFFFFF"
    },
    buttonsContainer: {
        marginTop: 20,
    },
    cancelButton: {
        border: 1,
        borderColor: "#989899",
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    nameContainer: {
        width: '100%',
        backgroundColor: '#1C1C1E',
        borderRadius: 12,
        paddingBottom: 15,
    },
    returnButton: {
        height: 40,
        borderWidth: 1,
        borderColor: "#989899",
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth - 10 - 20,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
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
        width: screenWidth - 10 - 20,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
    },
    addLabel: {
        fontSize: 20,
        color: "#FFFFFF"
    },
  });

function NonPlayableCharacterInput(props) {
    const [newNPC, setNewNPC] = React.useState(new NonPlayableCharacterModel("", 0, 0, 0));
    const [filledState, setFilledState] = React.useState([false, false, false, false]);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [firState, setFirState] = React.useState("");
    const [secState, setSecState] = React.useState("");
    const [thirState, setThirState] = React.useState("");


    const checkIfFilled = (val, fieldNum) => {
        if (val.trim()) {
            const newFilled = [...filledState];
            newFilled[fieldNum] = true;
            setFilledState(newFilled);
        }
        else {
            const newFilled = [...filledState];
            newFilled[fieldNum] = false;
            setFilledState(newFilled);
        }
    }

    const closeAlert = () => {
        setIsModalVisible(!isModalVisible);
    }

    const checkAddNPC = () => {
        if (filledState.every(element => element === true)) {
            props.addNPC(newNPC);
        }
        else {
            setIsModalVisible(!isModalVisible);
        }
    }

    return (
        <Modal isVisible={props.isModalVisible}
               transparent={true}
               animationType="slide"
               onRequestClose={props.goBack}>
            <View style={styles.backColor}>
                <View style={styles.mainContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.additionalInfoLabel}>Добавить НПС</Text>
                        <Text style={styles.inputLabel}>Имя или название</Text>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Например, вор"
                            placeholderTextColor="#989899"
                            onChangeText={val => {
                                const changedNPC = new NonPlayableCharacterModel(val,
                                    newNPC.initiative, newNPC.armor, newNPC.health);
                                setNewNPC(changedNPC);
                                checkIfFilled(val, 0);                     
                            }}
                        /> 
                    </View> 
                    <View>
                        <View style={styles.numberInputBox}>
                            <TextInput
                                keyboardType="numeric"
                                style={styles.numberInput}
                                placeholder="10"
                                placeholderTextColor="#989899"
                                maxLength={2}
                                value={firState}
                                onChangeText={val => {
                                    const text = val.replace(/[^0-9]/g, '')
                                    setFirState(text);
                                    checkIfFilled(text, 1);
                                    const changedNPC = new NonPlayableCharacterModel(newNPC.name,
                                        text, newNPC.armor, newNPC.health);
                                    setNewNPC(changedNPC);                     
                               }}
                            />
                            <Text style={styles.numberInputLabel}>Инициатива</Text>
                        </View>
                        <View style={styles.numberInputBox}>
                            <TextInput 
                                keyboardType="numeric"
                                style={styles.numberInput}
                                placeholder="10"
                                placeholderTextColor="#989899"
                                maxLength={2}
                                value={secState}
                                onChangeText={val => {
                                    const text = val.replace(/[^0-9]/g, '')
                                    setSecState(text);
                                    checkIfFilled(text, 2);
                                    const changedNPC = new NonPlayableCharacterModel(newNPC.name,
                                        newNPC.initiative, text, newNPC.health);
                                    setNewNPC(changedNPC);                     
                                }}
                           />
                            <Text style={styles.numberInputLabel}>Броня</Text>
                        </View>
                        <View style={styles.numberInputBox}>
                            <TextInput 
                                keyboardType="numeric"
                                style={styles.numberInput}
                                placeholder="10"
                                placeholderTextColor="#989899"
                                maxLength={6}
                                value={thirState}
                                onChangeText={val => {
                                    const text = val.replace(/[^0-9]/g, '')
                                    setThirState(text);
                                    checkIfFilled(text, 3);
                                    const changedNPC = new NonPlayableCharacterModel(newNPC.name,
                                        newNPC.initiative, newNPC.armor, text);
                                    setNewNPC(changedNPC);                      
                                }}
                            />
                           <Text style={styles.numberInputLabel}>Здоровье</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.returnButton} onPress={props.goBack}>
                            <Text style={styles.returnLabel}>Отмена</Text>
                       </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton} onPress={checkAddNPC}>
                            <Text style={styles.addLabel}>Добавить</Text>
                        </TouchableOpacity>
                    </View>
                    {isModalVisible && <Alert goBack={closeAlert} message="Не все поля заполнены!" isModalVisible={isModalVisible}/>}
                </View>
            </View>
        </Modal>
    );
}

export default NonPlayableCharacterInput;

