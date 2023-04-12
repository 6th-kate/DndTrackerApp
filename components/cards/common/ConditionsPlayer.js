import { View, StyleSheet, Button, Text, TouchableOpacity, Modal } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    btn: {
        width: 54,
        height: 32,
        tintColor: 'white',
        backgroundColor: 'rgba(56, 56, 65, 1)',
        borderRadius: 56,
        justifyContent: "center",
        alignItems: "center",
    },

    btnText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
    },

    state: {
        position: 'relative',
        height: 32,
        backgroundColor: 'rgba(56, 56, 65, 1)',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 8,
    },

    stateValue: {
        position: 'relative',
        height: 32,
        backgroundColor: 'rgba(56, 56, 65, 1)',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 20,
        marginRight: 20,
    },

    stateValueText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 32,
    },

    value: {
        height: 32,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 8,
        lineHeight: 32,
        position: 'absolute',
        top: 0,
        right: -20,
    },

    valueText: {
        color: 'rgba(56, 56, 65, 1)',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 32,
    },

    field: {
        height: 'auto',
        paddingBottom: 10,
        marginBottom: 13,
        backgroundColor: 'rgba(21, 21, 22, 1)',
        borderRadius: 12,
        justifyItems: 'end'
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

    flexHorizontal: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        gap: 6,
        paddingLeft: 5
    }
})

function State(props) {
    return (
        <View style={styles.state}>
            <Text style={styles.stateValueText}>{props.name}</Text>
        </View>
    );
}

function ConditionsPlayer(props) {
    const cond = props.character.effects.map(st => <State name={st.nameRu}/>)
    
    return (
        <View style={styles.field}>
            <Text style={styles.fieldLabel}>Состояния</Text>
            <View style={styles.flexHorizontal}>
                {cond}
            </View>
        </View>
    );
}

export default ConditionsPlayer;