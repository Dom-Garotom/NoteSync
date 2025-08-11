import { themeColors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const StyledModifiedTimeCategory = StyleSheet.create({


    categoryName: {
        color: themeColors.accent.primary,
        fontWeight: '400',
        fontSize: 16,
        paddingBottom: 10
    },

    noteItemHeader: {
        flexDirection: 'row',
        gap: 6,
    },

    noteName: {
        color: themeColors.text.title,
        fontWeight: '500',
        fontSize: 16,
    },

    noteContentText: {
        color: themeColors.text.subTitle,
        fontWeight: '400',
        fontSize: 14,
    },

    noteUpdateDateText: {
        color: themeColors.text.subTitle,
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'right',
        paddingTop: 5
    },


})
