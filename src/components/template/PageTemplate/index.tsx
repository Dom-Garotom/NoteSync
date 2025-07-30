import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, ScrollView, ScrollViewProps, StyleProp, View, ViewStyle } from 'react-native'
import { StyledPageTemplate } from './style'
import { themeColors } from '@/src/styles/colors'

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
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: themeColors.background.base,
                }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                {...pageTemplateAttributes}
            >
                <View
                    style={[StyledPageTemplate.page, style]}
                >
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default PageTemplate

