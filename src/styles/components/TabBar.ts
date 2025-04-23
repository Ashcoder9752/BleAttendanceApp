import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '..';

export const TabBarStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: Spacing.lg,
        borderTopWidth: 1,
        borderTopColor: Colors.textSecondary,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.foreground,
        fontSize: 14,
    },
    active: {
        color: Colors.primary,
    },
});
