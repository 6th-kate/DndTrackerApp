import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import StartScreen from "../components/screens/StartScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import EffectsScreen from "../components/screens/EffectsScreen/EffectsScreen";

const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
        position: "absolute",
        right: 0,
    },
    codeText: {
        color: "#FFFFFF", 
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: "#1C1C1E",
        justifyContent: "space-between",
    },
    initiativeContainer: {
        backgroundColor: "#383841",
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        borderRadius: 96,
        width: 60,
        position: "absolute",
        left: screenWidth/2 - 30,
    },
});


const EffectScreenButton = ({children, onPress}) => (
    <TouchableOpacity style={styles.exitContainer} onPress={onPress}>
        {children}
    </TouchableOpacity>
)

const StartScreenButton = (props) => 
    (<TouchableOpacity style={styles.initiativeContainer} onPress={props.onPress}>
        {props.children}
    </TouchableOpacity>)


const ProfileScreenButton = ({children, onPress}) => (
    <TouchableOpacity style={styles.codeContainer} onPress={onPress}>
        {children}
    </TouchableOpacity>
)

function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 48,
                backgroundColor: "#1C1C1E",
                borderTopWidth: 0,
            }}}
            initialRouteName="StartScreen">
            <Tab.Screen name="EffectsScreen" component={EffectsScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name="creation" size={28} color={focused? "#FFFFFF" : "#989899"}/>
                ),
                tabBarButton: (props) => (<EffectScreenButton {...props}/>)
            }}/>
            <Tab.Screen name="StartScreen" component={StartScreen} options={{
                
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name="home" size={28} color={focused? "#FFFFFF" : "#989899"}/>
                ),
                tabBarButton: (props) => (<StartScreenButton children={props.children} onPress={props.onPress}/>)
            }}/>
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name="account" size={28} color={focused? "#FFFFFF" : "#989899"}/>
                ),
                tabBarButton: (props) => (
                    <ProfileScreenButton {...props}/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;