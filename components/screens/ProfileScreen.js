import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#000',
        alignItems: "center",
        justifyContent: "center",
      },
    label: {
        fontSize: 24,
        color: "#FFFFFF",
        paddingBottom: 7
    },
})

function ProfileScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.label}>Здесь будет профиль</Text>
        </View>
    );
}

export default ProfileScreen;