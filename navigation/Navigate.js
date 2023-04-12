import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CharactersInputList from '../components/screens/CharactersInputList';
import GameScreen from '../components/screens/GameScreen';
import BattleScreen from "../components/screens/BattleScreen";
import NonPlayableCharacterInputScreen from "../components/screens/NonPlayableCharacterInputScreen";
import StartScreen from "../components/screens/StartScreen";
import PlayerGameScreen from "../components/screens/PlayerGameScreen";
import NormalGameScreen from "../components/screens/NormalGameScreen";
import Tabs from "./TabsNavigation";
import InitiativeGameScreen from "../components/screens/InitiativeGameScreen";

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

const InputOption = {
    headerShown: false
};

const GameOption = {
    headerShown: false
};

const NPCOption = {
    headerShown: false
};

const BattleOptions = {
    headerShown: false
};

const StartOptions = {
    headerShown: false
};

const PlayerGameOption = {
    headerShown: false
};

const NormalGameOption = {
    headerShown: false
};

const InitiativeGameOption = {
    headerShown: false
};

const screenOptions = {
    tabBarStyle: {
        backgroundColor: 'rgba(28, 28, 30, 1)',
    },
};

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={Tabs} options={StartOptions}/>
                <Stack.Screen name="CharactersInputList" component={CharactersInputList} options={InputOption} />
                <Stack.Screen name="GameScreen" component={GameScreen} options={GameOption} />
                <Stack.Screen name="BattleScreen" component={BattleScreen} options={BattleOptions} />
                <Stack.Screen name="NonPlayableCharacterInputScreen"
                   component={NonPlayableCharacterInputScreen} options={NPCOption} />
                <Stack.Screen name="PlayerGameScreen"
                   component={PlayerGameScreen} options={PlayerGameOption} />
                <Stack.Screen name="NormalGameScreen"
                 component={NormalGameScreen} options={NormalGameOption}/>
                <Stack.Screen name="InitiativeGameScreen"
                component={InitiativeGameScreen} options={InitiativeGameOption}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}