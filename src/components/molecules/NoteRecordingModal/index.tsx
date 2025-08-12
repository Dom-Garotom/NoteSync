import AudioVisualizer from '@/src/components/atoms/AudioVisualizer';
import { useAudioRecorder } from '@/src/hooks/useAudioRecord';
import { Mic } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './style';

interface NoteRecordingModalProps {
    onFinishRecord: (uri : string) => void
}

const NoteRecordingModal: React.FC<NoteRecordingModalProps> = ({ onFinishRecord }) => {
    const { isRecording, startRecording, stopRecording } = useAudioRecorder();
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const start = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
    };

    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const reset = () => {
        stop();
        setSeconds(0);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const startRecordingNote = async () => {
        await startRecording()
        start()
    }

    const stopRecordingNote = async () => {

        const uri = await stopRecording()

        if (!uri) {
            return
        }

        stop()
        reset()
        setModalIsVisible(false)
        onFinishRecord(uri)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalIsVisible}
        >
            <View style={styles.modal}>
                <View style={styles.container}>
                    <Text style={styles.title}>Notas de Áudio</Text>
                    <Text style={styles.title}>00:{seconds < 10 ? '0' + seconds : seconds}s</Text>

                    <AudioVisualizer />

                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={isRecording ? stopRecordingNote : startRecordingNote}
                            style={!isRecording ? styles.recording : styles.stopRecording}
                        >
                            <Mic color={'#fff'} />
                        </TouchableOpacity>

                        <Text style={styles.text}>{isRecording ? 'Parar Gravação' : 'Gravar'}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}


export default NoteRecordingModal