import React, {useEffect} from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppNavigator';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>

            <Animated.Image
                source={require('../../assets/splash-icon.png')} // Update with your own logo
                style={[styles.logo, {opacity: fadeAnim}]}
                resizeMode="contain"
            />
            <Animated.Text style={[styles.title, {opacity: fadeAnim}]}>
                Smart Attendance
            </Animated.Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    logo: {
        width: 140,
        height: 140,
        marginBottom: 25,
    },
    title: {
        fontSize: 28,
        color: '#F1F5F9',
        fontWeight: '600',
        fontFamily: 'System',
        letterSpacing: 1.2,
    },
});
