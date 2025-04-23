import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '..';

export const BadgeStyles = StyleSheet.create({
    base: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: Spacing.xs,
        paddingHorizontal: Spacing.sm,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: Colors.foreground,
        fontWeight: '600',
    },
});
