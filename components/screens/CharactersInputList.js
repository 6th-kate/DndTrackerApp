import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import PlayableCharacterModel from '../../models/PlayableCharacterModel';
import PlayableCharacterInput from '../cards/master/PlayableCharacterInput';
import Alert from "../modals/Alert";
import socket from '../../utils/socket';


const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 50,
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },
    addButton: {
        backgroundColor: '#383841',
        borderRadius: 56,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        alignSelf: "center",
    },
    addLabel: {
        fontSize: 36,
        color: "#FFFFFF",
    },
    endButtonsContainer: {
        padding: 5,
        paddingTop: 10,
        gap: 10
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
    startButton: {
        height: 40,
        backgroundColor: "#383841",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    startLabel: {
        fontSize: 20,
        color: "#FFFFFF"
    },
    contentContainer: {
        flex: 1,
    }
})

function CharactersInputList({navigation}) {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [filledState, setFilledState] = React.useState([false]);
    const initialElements = [new PlayableCharacterModel("", "", 0, 0, 0, 0)];

    const [dataState, setDataState] = useState(initialElements);

    const addElement = () => {
        const newArray = [...dataState, new PlayableCharacterModel("", "", 0, 0, 0, 0)];
        setDataState(newArray);
        const newFilledArray = [...filledState, false];
        setFilledState(newFilledArray);
    }

    const renderItem = ({item, index}) => (
        <View style={{padding: 10}}>
            <PlayableCharacterInput item={item} index={index} data={dataState} setData={setDataState} filled={filledState} setFilled={setFilledState}/>
        </View>
    );

    const startGame = () => {
        if (filledState.every(element => element === true)) {
            socket.emit("createGame", dataState);
        }
        else {
            setIsModalVisible(!isModalVisible);
        }
    }

    useEffect(() => {
        socket.on("createdGame", (gameCode) => {
            navigation.navigate("NormalGameScreen", {characters: dataState, code: gameCode})
        });
    }, [socket, navigation, dataState]);

    const goBack = () => {
        navigation.goBack();
    }

    const closeAlert = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <FlatList
                    data={dataState}
                    renderItem={renderItem}
                    ListFooterComponent={
                        <TouchableOpacity 
                            style={styles.addButton}
                            onPress={addElement}>
                            <Text style={styles.addLabel}>+</Text>
                        </TouchableOpacity>
                    }
            />
            </View>
            <View style={styles.endButtonsContainer}>
                <TouchableOpacity 
                style={styles.startButton}
                onPress={startGame}>
                    <Text style={styles.startLabel}>Начать игру</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.returnButton}
                    onPress={goBack}>
                    <Text style={styles.returnLabel}>Выйти</Text>
                </TouchableOpacity>
            </View>
            {isModalVisible && <Alert goBack={closeAlert} message="Не все поля заполнены!" isModalVisible={isModalVisible}/>}
        </View>
    )
}

export default CharactersInputList;