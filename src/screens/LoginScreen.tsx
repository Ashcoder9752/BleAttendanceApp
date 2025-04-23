import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../AppNavigator';
import {Colors, Spacing, Typography} from "../styles";
import {ButtonStyles, InputStyles} from "../styles/components";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type LoginErrors = {
    enrollment?: string;
    password?: string;
};

export default function LoginScreen(): React.JSX.Element {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [enrollment, setEnrollment] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<LoginErrors>({});

    async function handleLogin(){
        const newErrors: LoginErrors = {};

        if (!enrollment) newErrors.enrollment = 'Enrollment is required.';
        if (!password) newErrors.password = 'Password is required.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        if (enrollment !== '123456') {
            setErrors({ enrollment: 'Invalid enrollment number.' });
            return;
        }

        if (password !== 'password123') {
            setErrors({ password: 'Incorrect password.' });
            return;
        }

        const fakeToken = 'jwt-token-abc123';
        await AsyncStorage.setItem('authToken', fakeToken);
        navigation.replace('Home');
    }

    function handleForgotPassword(){
        const newErrors: LoginErrors = {};

        if (!enrollment) newErrors.enrollment = 'Enrollment is required.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        if (enrollment !== '123456') {
            setErrors({ enrollment: 'Invalid enrollment number.' });
            return;
        }

        setTimeout(() => {
            Alert.alert(
                'Reset Link Sent',
                `A password reset link has been sent for enrollment: ${enrollment}`
            );
        }, 500);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to continue</Text>

                {errors.enrollment && (
                    <Text style={styles.errorText}>{errors.enrollment}</Text>
                )}
                <TextInput
                    placeholder="Enrollment Number"
                    placeholderTextColor="#94a3b8"
                    style={[styles.input, errors.enrollment && InputStyles.error]}
                    value={enrollment}
                    onChangeText={(text) => {
                        setEnrollment(text);
                        if (errors.enrollment) setErrors(prev => ({ ...prev, enrollment: '' }));
                    }}
                    keyboardType="number-pad"
                />

                {errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#94a3b8"
                    style={[styles.input, errors.password && InputStyles.error]}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                    }}
                    secureTextEntry
                />


                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <Text style={styles.hint}>
                    Try: 123456 / password123
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: Spacing.xxl,
        justifyContent: 'center',
    },
    title: {
        ...Typography.title,
        marginBottom: Spacing.sm,
    },
    subtitle: {
        ...Typography.subtitle,
        marginBottom: Spacing.lg,
    },
    input: {
        ...InputStyles.input,
        marginBottom: Spacing.md
    },
    button: {
        ...ButtonStyles.base,
        ...ButtonStyles.primary,
        marginTop: Spacing.sm,
    },
    buttonText: {
        ...ButtonStyles.text
    },
    forgot: {
        ...Typography.link,
        marginTop: Spacing.md,
        textAlign: 'center',
    },
    hint: {
        ...Typography.hintText,
        marginTop: Spacing.lg,
        textAlign: 'center',
    },
    errorText: {
        color: Colors.error,
        marginTop: Spacing.xs,
        marginBottom: Spacing.sm,
        fontSize: 12,
        textAlign: 'left',
    },
});