import ModalWithInput from '@/src/components/molecules/ModalWithInput'
import NoteRecordingModal from '@/src/components/molecules/NoteRecordingModal';
import { useAudio } from '@/src/hooks/useAudio';
import { useAudioRecorder } from '@/src/hooks/useAudioRecord';
import { showToast } from '@/src/utils/showToast';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'


const AudioNote: React.FC = () => {
    const { createAudio } = useAudio()
    const [modalVisible, setModalVisible] = useState(false);
    const [uri, setUri] = useState<string | null>(null);
    const { navigate } = useRouter()

    return (
        <>
            <NoteRecordingModal
                onFinishRecord={(uri) => {
                    setUri(uri)
                    setModalVisible(true)
                }}
            />

            <ModalWithInput
                title='Áudio gravado com sucesso'
                subTitle='Dê um nome para essa nova nota em áudio.'
                modalIsVisible={modalVisible}
                onCancel={(e) => {
                    setModalVisible(e)
                    navigate('(core)/Home')
                }}

                onConfirm={(e) => {
                    if (!uri) {
                        setModalVisible(false)
                        navigate('(core)/Home')
                        showToast('error', 'Não foi possível criar sua nota de áudio')
                        return
                    }

                    setModalVisible(false)
                    createAudio(4, e, uri)
                    navigate('(core)/Home')
                    showToast('success', 'Sua nota de áudio foi salva com sucesso', 'Acesse agora sua nova nota de áudio na página home.')
                }}
            />

        </>
    )
}

export default AudioNote