import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    stateNormal: {
        position: 'relative',
        height: 32,
        backgroundColor: 'rgba(56, 56, 65, 1)',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: "center",
        justifyContent: "center",
        margin: 3,
    },
    statePressed: {
        position: 'relative',
        height: 32,
        backgroundColor: '#989899',
        borderRadius: 56,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: "center",
        justifyContent: "center",
        margin: 3,
    },
    stateValueText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 32,
    },
})

function EffectToggle(props) {
    const [ isPressed, setIsPressed ] = useState(false);

    const pressEffect = () => {
        const newArray = [...props.data];
        newArray[props.index] = !isPressed;
        props.setData(newArray); 
        setIsPressed(!isPressed);
    }

    return (
        <TouchableOpacity
            onPress={pressEffect}
            style={isPressed? styles.statePressed : styles.stateNormal}>
            <Text style={styles.stateValueText}>{props.item.nameRu}</Text>
        </TouchableOpacity>
    );
}

export default EffectToggle;