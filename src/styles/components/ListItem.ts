import { StyleSheet } from 'react-native';
import { Colors, Spacing, FontWeight } from '..';

export const ListItemStyles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing.xl,
        borderBottomColor: Colors.textSecondary,
        borderBottomWidth: 1,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: Spacing.lg,
    },
    text: {
        fontSize: 16,
        fontWeight: FontWeight.Medium,
        color: Colors.foreground,
    },
});
