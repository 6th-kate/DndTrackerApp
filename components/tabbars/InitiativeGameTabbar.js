import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        position: "absolute",
        bottom: 0,
        width: screenWidth,
        backgroundColor: '#151516',
        alignSelf: "center",
        height: 100,
    },
    roundLabel: {
        fontSize: 16,
        color: '#FFFFFF',
        top: -10,
    },
    roundNumLabel: {
        fontSize: 36,
        color: '#FFFFFF',
    },
    exitContainer: {
        height: 100,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#383841",
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth / 3,
    },
    codeContainer: {
        height: 100,
        width: screenWidth / 3,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: "#383841",
        justifyContent: "center",
        alignItems: "center",
    },
    codeText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: "#1C1C1E",
        justifyContent: "space-between",
    },
    initiativeContainer: {
        backgroundColor: "#383841",
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        borderRadius: 96,
        width: 60,
    },
    roundCounterContainer: {
        flexDirection: "column",
    },
    roundLabelsContainer: {
        alignItems: "center",
        alignContent: "center",
        top: -30,
    }
  });

function InitiativeGameTabbar(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.exitContainer} onPress={props.addNPC}>
                    <MaterialCommunityIcons name="plus" size={28} color='white' />
                </TouchableOpacity>
                <View style={styles.roundCounterContainer}>
                    <TouchableOpacity style={styles.initiativeContainer} onPress={props.toNormalGame}>
                        <MaterialCommunityIcons name="timer-sand-empty" size={28} color='white' />
                    </TouchableOpacity>
                    <View style={styles.roundLabelsContainer}>
                        <Text style={styles.roundNumLabel}>{props.roundNumber}</Text>
                        <Text style={styles.roundLabel}>раунд</Text>
                    </View> 
                </View>
                <TouchableOpacity style={styles.codeContainer} onPress={props.nextTurn}>
                    <MaterialCommunityIcons name="chevron-right" size={28} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default InitiativeGameTabbar;

