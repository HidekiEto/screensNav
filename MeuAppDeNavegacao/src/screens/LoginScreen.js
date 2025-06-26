import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (username === "Vitor" && password === "123") {
            setError("");
            navigation.navigate("Home");
        } else {
            setError("Usuário não encontrado. Tente novamente.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={handleLogin}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginTop: 60,
        marginBottom: 40,
        fontWeight: "bold",
    },
    inputContainer: {
        width: windowWidth * 0.8,
        marginBottom: 30,
    },
    input: {
        fontSize: 16,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#888",
        paddingVertical: 8,
        backgroundColor: "transparent",
    },
    error: {
        color: "red",
        marginTop: 5,
        textAlign: "center",
    },
    buttonContainer: {
        backgroundColor: "#add8e6",
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
        overflow: "hidden",
    },
});