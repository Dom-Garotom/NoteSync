import { StyleSheet } from "react-native"
import { themeColors } from "@/src/styles/colors"

const StyledPageTemplate = StyleSheet.create({
    page: {
        flex: 1,
        padding: 25,
        gap: 33,
        alignItems: 'center',
        backgroundColor: themeColors.background.base,
    },
})

export {
    StyledPageTemplate
}