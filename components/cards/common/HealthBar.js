import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    main: {
        //flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        height: 80,
    },

    healthBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        backgroundColor: 'rgba(21, 21, 22, 1)',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#383841',
    },

    healthHighText: {
        fontSize: 50,
        color: '#76B041',
        paddingLeft: 5
    },

    healthMiddleText: {
        fontSize: 50,
        color: '#BFAA3B',
        paddingLeft: 5
    },

    healthLowText: {
        fontSize: 50,
        color: '#B04141',
        paddingLeft: 5
    },

    armorView: {
        paddingTop: 5,
        paddingLeft: 10
    },

    armorText: {
        fontSize: 20,
        color: 'white',
        position: 'absolute',
        top: 18,
        left: 24
    },
})

function Health(props) {
    const calculateColor = (val) => {
        if (val > props.initialHealth * 2 / 3) {
            return '#76B041';
        }
        if (val > props.initialHealth / 3) {
            return '#BFAA3B';
        }
        return '#B04141';
    }

    const calculateStyle = (val) => {
        if (val > props.initialHealth * 2 / 3) {
            return styles.healthHighText;
        }
        if (val > props.initialHealth / 3) {
            return styles.healthMiddleText
        }
        return styles.healthLowText;
    }

    return (
        <View style={styles.healthBox}>
            <MaterialCommunityIcons name="heart" color={calculateColor(props.health)} size={30} paddingTop={15} />
            <Text style={calculateStyle(props.health)}>{props.health}</Text>
        </View>
    );
}

function Armor(props) {
    return (
        <View style={styles.armorView}>
            <MaterialCommunityIcons name="shield" color={'rgba(56, 56, 65, 1)'} size={50}>
            </MaterialCommunityIcons>
            <Text style={styles.armorText}>{props.armor}</Text>
        </View>
    );
}

function HealthBar({ props }) {
    return (
        <View style={styles.main}>
            <Health health={props.health} initialHealth={props.initialHealth}/>
            <Armor armor={props.armor}/>
        </View>
    );
}

export default HealthBar;