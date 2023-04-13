import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CharactersInputList from '../components/screens/CharactersInputList';
import NonPlayableCharacterInputScreen from "../components/screens/NonPlayableCharacterInputScreen";
import PlayerGameScreen from "../components/screens/PlayerGameScreen";
import NormalGameScreen from "../components/screens/NormalGameScreen";
import Tabs from "./TabsNavigation";
import InitiativeGameScreen from "../components/screens/InitiativeGameScreen";

const InputOption = {
    headerShown: false
};

const NPCOption = {
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

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={Tabs} options={StartOptions}/>
                <Stack.Screen name="CharactersInputList" component={CharactersInputList} options={InputOption} />
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