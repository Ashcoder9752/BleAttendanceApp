import React, {useState} from 'react';
import {
    Alert,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../AppNavigator';
import {Colors, Spacing, Typography} from "../styles";
import {ButtonStyles, InputStyles} from "../styles/components";

// Local
import usersData from '../data/users.json';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type LoginErrors = {
    enrollment?: string;
    password?: string;
};

type User = {
    _id: string;
    name: string;
    enrollment_number: string;
    email: string;
    batch_id?: string;
    role: "student" | "teacher" | "admin" | string;
    device_id: string | null;
    is_device_locked: boolean;
    created_at: string;
    last_login: string | null;
    password: string;
    status: string;
}

// Simulated device ID (replace this with any static ID or mock data)
const simulatedDeviceId = 'mock-device-id-123';

export default function LoginScreen(): React.JSX.Element {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [enrollment, setEnrollment] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<LoginErrors>({});

    async function handleLogin() {
        const newErrors: LoginErrors = {};

        if (!enrollment) newErrors.enrollment = 'Enrollment is required.';
        if (!password) newErrors.password = 'Password is required.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        // Fetch users from the JSON file
        const users: User[] = usersData;

        // Search for the user based on enrollment number
        const user = users.find(user => user.enrollment_number === enrollment);

        if (!user) {
            setErrors({enrollment: 'Invalid enrollment number.'});
            return;
        }

        if (user.password !== password) {
            setErrors({password: 'Incorrect password.'});
            return;
        }

        // Simulating the device lock and linking process
        if (user.is_device_locked) {
            if (!user.device_id) {
                // Simulate fetching a device ID (this would be real in production)
                const deviceId = simulatedDeviceId;

                // Set the device ID for the user (this is just for simulation)
                user.device_id = deviceId;

                // Simulate saving the updated user data (in actual case, this would be a server call)
                // Here we are just mocking that the user data is updated locally.

                Alert.alert(
                    "Device Lock",
                    "Your device has been linked successfully. Proceeding with the login.",
                    [{
                        text: "OK", onPress: () => {
                        }
                    }]
                );
            } else if (user.device_id !== simulatedDeviceId) {
                // If the device ID doesn't match the simulated one
                Alert.alert(
                    "Device Mismatch",
                    "The device ID doesn't match the one linked with your account.",
                    [{
                        text: "OK", onPress: () => {
                        }
                    }]
                );
                return;
            }
        }

        // Simulating JWT token handling
        const fakeToken = 'jwt-token-abc123';
        await AsyncStorage.setItem('authToken', fakeToken);

        // Navigate to the appropriate screen based on a role
        if (user.role === 'student') {
            navigation.replace('Home');
            // } else if (user.role === 'teacher') {
            //     navigation.replace('TeacherDashboard');
            // } else if (user.role === 'admin') {
            //     navigation.replace('AdminDashboard');
        }
    }

    // Function to handle password reset
    async function handleForgotPassword() {
        const newErrors: LoginErrors = {};

        if (!enrollment) newErrors.enrollment = 'Enrollment is required.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const users = usersData;

        const user = users.find(user => user.enrollment_number === enrollment);

        if (!user) {
            setErrors({enrollment: 'Invalid enrollment number.'});
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
                        if (errors.enrollment) setErrors(prev => ({...prev, enrollment: ''}));
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
                        if (errors.password) setErrors(prev => ({...prev, password: ''}));
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