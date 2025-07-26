import { StyleSheet } from "react-native"
import { themeColors } from "@/src/styles/colors"

const StyledSectionTitle = StyleSheet.create({
    title: {
        width: '100%',
        fontSize: 28,
        fontWeight: '600',
        color: themeColors.text.title,
    },
})

export {
    StyledSectionTitle
}