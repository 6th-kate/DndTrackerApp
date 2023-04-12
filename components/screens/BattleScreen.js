import { StyleSheet, View, ScrollView } from 'react-native';
import NPC from "../cards/master/NPCCard";
import NonPlayableCharacterModel from "../../models/NonPlayableCharacterModel";

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    gameContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0
    },
    scroll: {
        backgroundColor: '#000',
    },

});

const npc = new NonPlayableCharacterModel(
    'Normal NPC',
    '0',
    '23',
    '80'
)

const npc2 = new NonPlayableCharacterModel(
    'Chad NPC',
    '0',
    '78',
    '999'
)

function BattleScreen() {
    const characters = [npc, npc2]
    const chComp = characters.map(ch =>
        <View style={styles.gameContainer}>
            <NPC props={ch} />
        </View>
    )
    return (
        <ScrollView style={styles.scroll}>
            {chComp}
        </ScrollView>
    );
}

export default BattleScreen;