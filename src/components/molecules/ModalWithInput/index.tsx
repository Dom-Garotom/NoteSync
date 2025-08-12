import React, { useState } from 'react'
import { KeyboardAvoidingView, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StyledModalWithInput } from './style';

interface ModalWithInputProps {
    modalIsVisible: boolean,
    title: string
    subTitle: string
    cancelButtonText?: string
    confirmButtonText?: string
    onCancel: (visibility: boolean) => void
    onConfirm: (inputText: string) => void
}

const ModalWithInput: React.FC<ModalWithInputProps> = ({
    title = 'Titulo',
    subTitle = 'Subtitulo',
    cancelButtonText = 'Descartar',
    confirmButtonText = 'Continuar',
    modalIsVisible = false,
    onCancel,
    onConfirm
}) => {
    const [textInput, setTextInput] = useState<string>('');

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalIsVisible}
            >
                <View style={StyledModalWithInput.container}>
                    <View style={StyledModalWithInput.modalContainer}>
                        <View>
                            <Text style={StyledModalWithInput.title}>
                                {title}
                            </Text>
                            <Text style={StyledModalWithInput.subTitle}>
                                {subTitle}
                            </Text>
                        </View>

                        <TextInput
                            style={StyledModalWithInput.input}
                            onChangeText={setTextInput}
                            placeholder='Já tem algo em mente ?'
                        />

                        <View style={StyledModalWithInput.buttonContainer}>
                            <TouchableOpacity
                                style={[
                                    StyledModalWithInput.button,
                                    StyledModalWithInput.exitButton
                                ]}
                                onPress={() => onCancel(false)}
                            >
                                <Text
                                    style={[StyledModalWithInput.textButton]}
                                >
                                    {cancelButtonText}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    StyledModalWithInput.button,
                                    StyledModalWithInput.concludeButton
                                ]}
                                onPress={() => onConfirm(textInput)}
                            >
                                <Text
                                    style={[
                                        StyledModalWithInput.textButton,
                                        { color: '#fff' }
                                    ]}
                                >
                                    {confirmButtonText}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default ModalWithInput