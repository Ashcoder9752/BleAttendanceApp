import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, Spacing, Typography} from '../styles';
import {CardStyles} from '../styles/components';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../AppNavigator";

const screenWidth = Dimensions.get('window').width;
const cardSpacing = Spacing.md;
const cardWidth = (screenWidth - cardSpacing * 3) / 2; // 2 columns + spacing

export default function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View  style={styles.container}>
            <ScrollView>
                {/* Timetable section */}
                <Text style={Typography.subtitle}>Today's Timetable</Text>
                <View style={styles.timetableScrollContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {['Maths', 'Physics', 'Chemistry'].map((subject, idx) => (
                            <View key={idx} style={styles.timetableCard}>
                                <Text style={CardStyles.header}>{subject}</Text>
                                <Text style={CardStyles.content}>10:00 AM - 11:00 AM</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Actions section */}
                <Text style={Typography.subtitle}>Quick Actions</Text>
                <View style={styles.grid}>
                    <TouchableOpacity
                        style={styles.gridCard}
                        onPress={() => navigation.navigate('Scanning')}
                    >
                        <Text style={CardStyles.header}>Attendance Scanning</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridCard}>
                        <Text style={CardStyles.header}>My Grades</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridCard}>
                        <Text style={CardStyles.header}>Course Material</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridCard}>
                        <Text style={CardStyles.header}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.xxxl,
    },
    timetableScrollContainer: {
        height: 100,
        marginVertical: Spacing.lg,
    },
    timetableScroll: {
        paddingVertical: Spacing.sm,
        paddingRight: Spacing.sm,
    },
    timetableCard: {
        ...CardStyles.base,
        width: 160,
        height: 100,
        marginRight: Spacing.md,
        padding: Spacing.md,
        justifyContent: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: Spacing.lg,
    },
    gridCard: {
        ...CardStyles.base,
        width: cardWidth,
        height: 110,
        marginBottom: Spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
