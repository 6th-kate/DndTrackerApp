import { View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import ConnectModal from '../modals/ConnectModal';
import socket from '../../utils/socket';
import Alert from '../modals/Alert';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 50,
        backgroundColor: '#000',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    connectButton: {
        height: 150,
        borderWidth: 1,
        borderColor: "#989899",
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 0,
        width: screenWidth - 20,
    },
    connectLabel: {
        fontSize: 20,
        color: "#989899"
    },
    createButton: {
        height: 150,
        backgroundColor: "#383841",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: screenWidth - 20,
    },
    createLabel: {
        fontSize: 20,
        color: "#FFFFFF"
    },
});

function StartScreen() {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [isErrModalVisible, setIsErrModalVisible] = React.useState(false);
    const navigation = useNavigation();

    const startGame = () => {
        navigation.navigate("CharactersInputList");
    }

    const addGame = () => {
        setIsModalVisible(!isModalVisible);
    }
    const goBack = () => {
        setIsModalVisible(!isModalVisible);
    }

    const closeAlert = () => {
        setIsErrModalVisible(!isErrModalVisible);
    }

    const connectGame = (codeGame) => {
        socket.emit("connectGame", codeGame);
        setIsModalVisible(!isModalVisible);
        // get characters from server
        //const charactersArr = [new PlayableCharacterModel("dhudshu", "hbds", 9, 0, 8, 21),new PlayableCharacterModel("dhudshu", "hbds", 9, 0, 8, 21), new NonPlayableCharacterModel("fkshrbf", 0, 34, 56)]
        //
    }

    React.useEffect(() => {
        socket.on("connectedGame", (charactersArr, codeGame) => {
            navigation.navigate("PlayerGameScreen", {characters: charactersArr, code: codeGame})
        });
    }, [socket, navigation])

    React.useEffect(() => {
        socket.on("incorrectRoom", () => {
            setIsModalVisible(!isModalVisible);
        });
    }, [socket, navigation])

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.createButton} onPress={startGame}>
                <Text style={styles.createLabel}>Создать игру</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.connectButton} onPress={addGame}>
                <Text style={styles.connectLabel}>Присоединиться к игре</Text>
            </TouchableOpacity>
            {isModalVisible && <ConnectModal goBack={goBack} connectGame={connectGame} isModalVisible={isModalVisible}/>}
            {isErrModalVisible && <Alert goBack={closeAlert} message="Игра с таким кодом не найдена" isModalVisible={isErrModalVisible}/>}
        </View>
    );
}

export default StartScreen;