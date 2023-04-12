import { View, StyleSheet, Text, Dimensions } from 'react-native';
import HealthBar from '../common/HealthBar';
import ConditionsPlayer from '../common/ConditionsPlayer';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        width: screenWidth-10,
        borderRadius: 10,
        backgroundColor: 'rgba(28, 28, 30, 1)',
        color: 'white',
        padding: 13
      },
    label: {
        fontSize: 24,
        color: "#FFFFFF",
        paddingBottom: 7
    },

    concentration: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#FFFFFF',
        paddingVertical: 5,
        borderRadius: 35,
        backgroundColor: '#76B041',
        margin: 10,
        width: screenWidth-30,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
})

function NPCCardPlayer(props) {
  return (
      <View style={styles.card}>
        <Text style={styles.label}>{props.character.name}</Text>
        <HealthBar props={props.character}/>
        {(props.character.effects.length > 0) && <ConditionsPlayer character={props.character}/>}
        {(props.character.concentration) && <Text style={styles.concentration}>Концентрация</Text>}
      </View>
  );
}

export default NPCCardPlayer;
