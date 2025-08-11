import { themeColors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const StyledSearchPage = StyleSheet.create({

    header: {
        width: '100%',
        paddingVertical: 15,
    },

    title: {
        color: themeColors.text.title,
        fontWeight: 'semibold',
        fontSize: 26,
        fontFamily: 'Montserrat',
    },

    subTitle: {
        color: themeColors.text.subTitle,
        fontWeight: 'medium',
        fontSize: 16,
        fontFamily: 'Montserrat',
    },

    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },

    resultsTitle: {
        width: '100%',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        color: themeColors.text.subTitle,
    },

    fallbackContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 140,
    },

    notificationIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        marginBottom: 12,
        borderRadius: '100%',
        backgroundColor: themeColors.accent.icons,
    },


    noteContainer: {
        marginBottom: 16,
    },
    noteTitle: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 4,
    },
    noteContent: {
        fontSize: 14,
        color: '#444',
    },
    highlight: {
        backgroundColor: '#d0c4ff',
        borderRadius: 3,
    },
    noResults: {
        color: '#999',
        fontStyle: 'italic',
        marginTop: 20,
    },
});
