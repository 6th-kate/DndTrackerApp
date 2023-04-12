import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Modal } from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        width: screenWidth / 2,
        backgroundColor: '#151516',
        margin: 5,
        borderRadius: 10,
        paddingBottom: 20,
        padding: 5,
    },
    backColor: {
        backgroundColor: 'rgba(98, 98, 98, 0.5)',
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
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
    addButtonActive: {
        height: 40,
        backgroundColor: "#383841",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonInactive: {
        height: 40,
        backgroundColor: "#2C2C31",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    addLabelActive: {
        fontSize: 20,
        color: "#FFFFFF"
    },
    addLabelInactive: {
        fontSize: 20,
        color: "'rgba(255, 255, 255, 0.5)'"
    },
    endButtonsContainer: {
        padding: 5,
        paddingTop: 10,
        gap: 10
    },
    inputLabel: {
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 20,
    },
    codeInputBox: {
        borderColor: '#383841',
        borderWidth: 1,
        borderRadius: 9,
        margin: 5,
        marginBottom: 15,
        alignItems: "center",
    },
    numberInput: {
        fontSize: 36,
        color: "#FFFFFF"
    },
})

function ConnectModal(props) {
    const [isFilled, setIsFilled] = React.useState(false);
    const [code, setCode] = React.useState("");

    return (
        <Modal isVisible={props.isModalVisible}
               transparent={true}
               animationType="slide"
               onRequestClose={props.goBack}>
            <View style={styles.backColor}>
                <View style={styles.mainContainer}>
                    <Text style={styles.inputLabel}>Код присоединения</Text>
                    <View style={styles.codeInputBox}>
                        <TextInput style={styles.numberInput}
                                   placeholder="AAAA"
                                   placeholderTextColor="#989899"
                                   maxLength={7}
                                   onChangeText={val => {
                                      if (val === "") {
                                        setIsFilled(false);
                                      }
                                      else {
                                        setCode(val);
                                        setIsFilled(true);
                                      }                   
                                   }}
                        />
                    </View>
                    <View style={styles.endButtonsContainer}>
                        <TouchableOpacity style={isFilled? styles.addButtonActive : styles.addButtonInactive} onPress={() => {if (isFilled) props.connectGame(code)}}>
                            <Text style={isFilled? styles.addLabelActive : styles.addLabelInactive}>Продолжить</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.returnButton} onPress={props.goBack}>
                            <Text style={styles.returnLabel}>Отмена</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>  
    );
}

export default ConnectModal;