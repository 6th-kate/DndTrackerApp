import { StyleSheet, Text, View, TextInput, Dimensions, } from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        width: screenWidth - 10,
        backgroundColor: '#151516',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        paddingBottom: 20,
        alignSelf: "center",
    },
    nameContainer: {
        width: '100%',
        backgroundColor: '#1C1C1E',
        borderRadius: 12,
        paddingBottom: 15,
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
        marginTop: 5,
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
        paddingRight: 8,
        paddingLeft: 8,
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
  });

function PlayableCharacterInput(props) {
    const [filledState, setFilledState] = React.useState([false, false, false, false]);
    const [firState, setFirState] = React.useState("");
    const [secState, setSecState] = React.useState("");
    const [thirState, setThirState] = React.useState("");

    const checkIfFilled = (val, fieldNum) => {
        if (val.trim()) {
            const newFilled = [...filledState];
            newFilled[fieldNum] = true;
            setFilledState(newFilled);
            if (newFilled.every(element => element === true)) {
                const newParentsFilled = [...props.filled];
                newParentsFilled[props.index] = true;
                props.setFilled(newParentsFilled);
            }
        }
        else {
            const newFilled = [...filledState];
            newFilled[fieldNum] = false;
            setFilledState(newFilled);
            const newParentsFilled = [...props.filled];
            newParentsFilled[props.index] = false;
            props.setFilled(newParentsFilled);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.inputLabel}>Имя</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Героическое имя"
                    placeholderTextColor="#989899"
                    onChangeText={val => {
                        checkIfFilled(val, 0);
                        const newArray = [...props.data];
                        newArray[props.index].name = val;
                        props.setData(newArray);                        
                    }}
                />
            </View>
            
            <View>
                <Text style={styles.additionalInfoLabel}>Дополнительная информация</Text>
                <View>
                   <Text style={styles.inputLabel}>Языки</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Например, эльфийский"
                        placeholderTextColor="#989899"
                        onChangeText={val => {
                            const newArray = [...props.data];
                            newArray[props.index].languages = val;
                            props.setData(newArray);                    
                        }}
                    />
                </View>
                <View>
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
                                checkIfFilled(text, 1);
                                const newArray = [...props.data];
                                newArray[props.index].insight = text;
                                props.setData(newArray);                        
                            }}
                        />
                        <Text style={styles.numberInputLabel}>Проницательность</Text>
                    </View>
                    <View style={styles.numberInputBox}>
                        <TextInput 
                            keyboardType="numeric"
                            style={styles.numberInput}
                            placeholder="0"
                            placeholderTextColor="#989899"
                            maxLength={2}
                            value={secState}
                            onChangeText={val => {
                                const text = val.replace(/[^0-9]/g, '')
                                setSecState(text);
                                checkIfFilled(text, 2);
                                const newArray = [...props.data];
                                newArray[props.index].perception = text;
                                props.setData(newArray);                        
                            }}
                        />
                        <Text style={styles.numberInputLabel}>Внимание</Text>
                    </View>
                    <View style={styles.numberInputBox}>
                        <TextInput 
                            keyboardType="numeric"
                            style={styles.numberInput}
                            placeholder="0"
                            placeholderTextColor="#989899"
                            maxLength={2}
                            value={thirState}
                            onChangeText={val => {
                                const text = val.replace(/[^0-9]/g, '')
                                setThirState(text);
                                checkIfFilled(text, 3);
                                const newArray = [...props.data];
                                newArray[props.index].investigation = text;
                                props.setData(newArray);                        
                            }}
                        />
                        <Text style={styles.numberInputLabel}>Расследование</Text>
                    </View>
                </View>
            </View>
        </View>
    );
  }

  export default PlayableCharacterInput;

