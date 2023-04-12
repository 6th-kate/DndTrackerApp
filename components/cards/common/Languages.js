import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    languages: {
        height: 72,
        marginBottom: 5,
        borderRadius: 10,
        justifyItems: "end"
      },
    fieldLabel: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 400,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'rgba(90, 90, 94, 1)'
    },
    fieldLanguages: {
        textAlign:'left',
        fontSize: 16,
        fontWeight: 500,
        paddingLeft: 5,
        paddingTop: 5,
        color: 'rgb(255, 255, 255)'
    }
})


function Languages(props) {
    return (
      <View style={styles.languages}>
        <Text style={styles.fieldLabel}>{props.name}</Text>
        <Text style={styles.fieldLanguages}>{props.languages}</Text>
        </View>
    );
  }
  export default Languages;  