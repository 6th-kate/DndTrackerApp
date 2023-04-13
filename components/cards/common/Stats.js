import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    statsLabelBig: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 700,
        color: 'rgba(152, 152, 153, 1)'
    },

    statsLabelSmall: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(152, 152, 153, 1)'

    },
    grid: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center'
    },

    fieldCenterContent: {
        height: 'auto',
        paddingBottom: 10,
        marginBottom: 13,
        backgroundColor: 'rgba(21, 21, 22, 1)',
        borderRadius: 10,
        justifyItems: 'end',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
})

function StatsLabel(props) {
    return (
      <View>
        <Text style={styles.statsLabelBig}>{props.value}</Text>
        <Text style={styles.statsLabelSmall}>{props.name}</Text>
      </View>
    );
  }
  
  function Stats({props}) {
    return (
      <View style={styles.grid}>
        <View style={[styles.fieldCenterContent,{width: "48%"}]}>
          <StatsLabel value = {props.insight} name = "Проницательность"/>
        </View>
        <View style={[styles.fieldCenterContent,{width: "48%"}]}>
          <StatsLabel value = {props.perception} name = "Внимание"/>
        </View>
        <View style={[styles.fieldCenterContent,{width: "98%"}]}>
          <StatsLabel value = {props.investigation} name = "Расследование"/>
        </View>
      </View>
    );
  }

  export default Stats;