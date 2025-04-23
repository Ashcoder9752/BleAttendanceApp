import { StyleSheet } from 'react-native';
import { Colors, Spacing, FontWeight } from '..';

export const InputStyles = StyleSheet.create({
    input: {
        backgroundColor: Colors.secondary,
        color: Colors.foreground,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.md,
        borderRadius: 12,
        fontSize: 16,
        fontWeight: FontWeight.Regular,
    },
    error: {
        borderColor: Colors.error,
        borderWidth: 1,
    },
});
