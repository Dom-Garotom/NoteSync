import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import { StyledSectionSwap } from "./style";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";



interface SectionSwitchProps {
    currentSwitchSection: (switchSection: string) => void
}

const SectionSwitch: React.FC<SectionSwitchProps> = ({ currentSwitchSection }) => {
    const sections = [{
        name: 'workspace',
        text: 'Espaços'
    },
    {
        name: 'favorites',
        text: 'Favoritos'
    },
    {
        name: 'recent',
        text: 'Recentes'
    }]

    const activeIndex = useSharedValue(0);
    const tabWidth = 90;

    const underlineStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(activeIndex.value * tabWidth) }],
        };
    });

    const switchSection = (index: number, section: string) => {
        activeIndex.set(index)
        currentSwitchSection(section)
    }

    return (
        <View style={StyledSectionSwap.container}>
            {sections.map((section, index) => {
                return (
                    <TouchableOpacity
                        key={section.name}
                        onPress={() => {
                            switchSection(index, section.name);
                        }}
                        style={StyledSectionSwap.button}
                    >
                        <Text
                            style={[
                                StyledSectionSwap.text,
                                activeIndex.value === index
                                    ? StyledSectionSwap.activeText
                                    : StyledSectionSwap.inactiveText
                            ]}
                        >
                            {section.text}
                        </Text>
                    </TouchableOpacity>
                );
            })}

            <Animated.View style={[StyledSectionSwap.underline, underlineStyle]} />
        </View>
    );
}

export default SectionSwitch

