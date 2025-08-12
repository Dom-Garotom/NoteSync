import Svg, { Rect } from 'react-native-svg';
import { useAudioRecorder } from '@/src/hooks/useAudioRecord';
import { Play } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeColors } from '@/src/styles/colors';

interface AudioPLayerProps {
    name: string
    uri: string
};

export const AudioPLayer: React.FC<AudioPLayerProps> = ({ uri, name }) => {
    const { playAudio } = useAudioRecorder()
    const bars = Array.from({ length: 130 }, () => Math.random());

    return (
        <View style={StyledAudioPlayer.player}>
            <Text style={StyledAudioPlayer.title}>{name}</Text>

            <View style={StyledAudioPlayer.container}>
                <TouchableOpacity
                    style={StyledAudioPlayer.playButton}
                    onPress={() => playAudio(uri)}
                >
                    <Play size={16} color={"#fff"} />
                </TouchableOpacity>

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
            </View >

        </View>
    );
}

const StyledAudioPlayer = StyleSheet.create({
    player: {
        marginTop: 10,
        borderRadius: 12 ,
        gap: 10,
    },

    title: {
        color: themeColors.text.title,
        fontWeight: '400',
        fontSize: 14,
    },


    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    playButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: themeColors.accent.links,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
