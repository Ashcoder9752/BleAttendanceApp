import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '..';

export const ToastStyles = StyleSheet.create({
    base: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        borderRadius: 8,
        position: 'absolute',
        bottom: Spacing.xl,
        left: '10%',
        right: '10%',
        zIndex: 1000,
    },
    text: {
        color: Colors.foreground,
        fontSize: 16,
        fontWeight: '500',
    },
});
