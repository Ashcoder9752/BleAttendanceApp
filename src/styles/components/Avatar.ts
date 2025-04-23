import { StyleSheet } from 'react-native';

export const AvatarStyles = StyleSheet.create({
    base: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    large: {
        width: 72,
        height: 72,
        borderRadius: 36,
    },
});
