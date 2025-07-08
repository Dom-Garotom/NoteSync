import React, { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'
import { StyledPageTemplate } from './style'

interface PageTemplateProps {
    children: ReactNode,
    pageTemplateAttributes?: Omit<SafeAreaViewProps, "style">
    style?: StyleProp<ViewStyle>
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    children,
    pageTemplateAttributes,
    style
}) => {
    return (
        <SafeAreaView
            style={[StyledPageTemplate.page, style]}
            {...pageTemplateAttributes}
        >
            {children}
        </SafeAreaView>
    )
}

export default PageTemplate

