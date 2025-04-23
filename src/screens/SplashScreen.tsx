import React, {useEffect} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppNavigator';
import {Colors, Spacing, Typography} from "../styles";

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen(): React.JSX.Element {
    const navigation = useNavigation<SplashScreenNavigationProp>();
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();

        const checkLoginStatus = async () => {
            const token = await AsyncStorage.getItem('authToken');
            setTimeout(() => {
                if (token) {
                    navigation.replace('Home');
                } else {
                    navigation.replace('Login');
                }
            }, 2000);
        };

        checkLoginStatus();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../assets/splash-icon.png')}
                style={[styles.logo, {opacity: fadeAnim}]}
                resizeMode="contain"
            />
            <Animated.Text style={[styles.title, {opacity: fadeAnim}]}>
                Smart Attendance
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacing.xl,
    },
    logo: {
        width: 140,
        height: 140,
        marginBottom: Spacing.lg,
    },
    title: {
        ...Typography.title,
        marginTop: Spacing.md,
    },
});
