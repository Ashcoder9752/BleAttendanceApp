import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '..';

export const ModalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.xl,
        width: '80%',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: Spacing.lg,
    },
    content: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
});
