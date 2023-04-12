import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal } from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        width: screenWidth / 2,
        backgroundColor: '#151516',
        margin: 5,
        borderRadius: 10,
        paddingBottom: 20,
        padding: 10,
    },
    backColor: {
        backgroundColor: 'rgba(98, 98, 98, 0.5)',
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
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
    inputLabel: {
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 20,
        textAlign: "center"
    },
})

function Alert(props) {
    return (
        <Modal isVisible={props.isModalVisible}
               transparent={true}
               animationType="slide"
               onRequestClose={props.goBack}>
            <View style={styles.backColor}>
                <View style={styles.mainContainer}>
                    <Text style={styles.inputLabel}>{props.message}</Text>
                    <TouchableOpacity style={styles.addButton} onPress={props.goBack}>
                        <Text style={styles.addLabel}>Понятно</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>  
    );
}

export default Alert;