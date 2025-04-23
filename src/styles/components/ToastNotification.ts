import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '..';

export const ToastNotificationStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        borderRadius: 8,
        position: 'absolute',
        bottom: Spacing.xl,
        left: '10%',
        right: '10%',
    },
    text: {
        color: Colors.foreground,
        fontSize: 14,
    },
});
