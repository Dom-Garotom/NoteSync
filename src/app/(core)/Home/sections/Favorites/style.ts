import { themeColors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const StyledFavorite = StyleSheet.create({
  notesContainer: {
    gap: 20,
  },

  noteItem: {
    flexDirection: 'column',
    gap: 4,
    marginVertical: 3,
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

});
