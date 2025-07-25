import React, { ReactNode } from 'react'
import { ScrollView, ScrollViewProps, StyleProp, View, ViewStyle } from 'react-native'
import { StyledPageTemplate } from './style'

interface PageTemplateProps {
    children: ReactNode,
    pageTemplateAttributes?: Omit<ScrollViewProps, "style">
    style?: StyleProp<ViewStyle>
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    children,
    pageTemplateAttributes,
    style
}) => {
    return (
        <ScrollView
            scrollEnabled={true}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            {...pageTemplateAttributes}
        >
            <View
                style={[StyledPageTemplate.page, style]}
            >
                {children}
            </View>
        </ScrollView>
    )
}

export default PageTemplate

