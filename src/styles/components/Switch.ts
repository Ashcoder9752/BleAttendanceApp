import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '..';

export const SwitchStyles = StyleSheet.create({
    base: {
        width: 50,
        height: 25,
        borderRadius: 25,
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        padding: 2,
    },
    knob: {
        width: 21,
        height: 21,
        borderRadius: 21,
        backgroundColor: Colors.foreground,
    },
    active: {
        backgroundColor: Colors.primary,
    },
});
