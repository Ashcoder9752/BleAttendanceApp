import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../AppNavigator';
import {Colors} from "../styles";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleLogout = async () => {
        await AsyncStorage.removeItem('authToken');
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Home!</Text>

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 24,
        color: '#f1f5f9',
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: '#ef4444',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
