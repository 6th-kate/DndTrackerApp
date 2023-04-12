import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        //position: "absolute",
        //bottom: 0,
        width: screenWidth,
        backgroundColor: '#151516',
        alignSelf: "center",
    },
    exitContainer: {
        height: 48,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#383841",
        justifyContent: "center",
        alignItems: "center",
        width: 126,
    },
    codeContainer: {
        height: 48,
        width: 126,
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
    },
    littleContainer: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        flex: 1,
    },
  });

  function PlayerTabbar(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.exitContainer} onPress={props.goBack}>
                    <MaterialCommunityIcons name="exit-to-app" size={28} color='white' />
                </TouchableOpacity>
                <View style={styles.littleContainer}>
                    <View style={styles.codeContainer}>
                        <Text style={styles.codeText}>{props.code}</Text>
                    </View> 
                </View>
            </View>
        </View>
    );
  }

export default PlayerTabbar;

