import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '..';

export const CardStyles = StyleSheet.create({
    base: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.lg,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: Spacing.md,
    },
    content: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
});
