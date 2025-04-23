import { StyleSheet } from 'react-native';
import { Colors, Spacing, FontWeight } from '..';

export const ButtonStyles = StyleSheet.create({
    base: {
        borderRadius: 12,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xl,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: Colors.primary,
    },
    secondary: {
        backgroundColor: Colors.secondary,
    },
    disabled: {
        backgroundColor: '#1E293B',
        opacity: 0.6,
    },
    text: {
        color: Colors.foreground,
        fontSize: 16,
        fontWeight: FontWeight.SemiBold,
    },
});
