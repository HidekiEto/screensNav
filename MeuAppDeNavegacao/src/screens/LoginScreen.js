import React from "react";
import { View, Text, Button, StyleSheet, TextInput, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <View style={styles.title} >
                <TextInput 
                style={{ fontSize: 16, marginBottom: 20 }}
                placeholder="Username"
                /> 
                <TextInput style={{ fontSize: 16, marginBottom: 20 }}
                placeholder="Password"
                />r
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: "#add8e6",
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});