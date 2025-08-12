import React from 'react'
import Svg, { Rect } from 'react-native-svg';

interface AudioVisualizerProps {
    text?: string
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ text }) => {
    const bars = Array.from({ length: 130 }, () => Math.random());

    return (
        <Svg height="40" width="250" style={{ marginLeft: 12 }}>
            {bars.map((value, index) => {
                const barHeight = value * 40;
                return (
                    <Rect
                        key={index}
                        x={index * 6}
                        y={(40 - barHeight) / 2}
                        width={3}
                        height={barHeight}
                        fill="#ccc"
                        rx={1.5}
                    />
                );
            })}
        </Svg>
    )
}

export default AudioVisualizer