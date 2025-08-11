import React from "react";
import { Text } from "react-native";
import { StyledHighlightedText } from "./style";


interface HighlightedTextProps {
    text: string;
    highlight: string
}


export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlight }) => {
    if (!highlight) return <Text>{text}</Text>;

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return (
        <Text>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <Text key={i} style={StyledHighlightedText.highlight}>
                        {part}
                    </Text>
                ) : (
                    <Text key={i}>{part}</Text>
                )
            )}
        </Text>
    );
}
