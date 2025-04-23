import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>🏠 Welcome to Home Screen!</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
