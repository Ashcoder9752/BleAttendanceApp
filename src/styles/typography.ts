import { FontWeight } from './utils/fontWeight';
import { Colors } from './colors';

export const Typography = {
    title: {
        fontSize: 32,
        fontWeight: FontWeight.SemiBold,
        letterSpacing: 1.2,
        color: Colors.textPrimary,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: FontWeight.Medium,
        color: Colors.textPrimary,
    },
    heading: {
        fontSize: 28,
        fontWeight: FontWeight.Bold,
        color: Colors.textPrimary,
        letterSpacing: 1.2,
    },
    body: {
        fontSize: 16,
        fontWeight: FontWeight.Regular,
        color: Colors.textPrimary,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: FontWeight.SemiBold,
        color: Colors.textPrimary,
    },
    caption: {
        fontSize: 14,
        fontWeight: FontWeight.Light,
        color: Colors.textSecondary,
    },
    hintText: {
        fontSize: 12,
        fontWeight: FontWeight.Regular,
        color: Colors.textHint,
    },
    link: {
        fontSize: 16,
        fontWeight: FontWeight.SemiBold,
        color: Colors.link,
    },
    headingLarge: {
        fontSize: 36,
        fontWeight: FontWeight.Bold,
        letterSpacing: 1.5,
        color: Colors.foreground,
    },
};
