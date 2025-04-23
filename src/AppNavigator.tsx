import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home Screen' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
