import { CreateMenuContext } from '@/src/context/model/createMenuModel'
import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '@/src/styles/colors';
import { AudioLines, FolderPlus, Mic } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface CreateMenuProps {
    modalIsVisible: boolean
}

const CreateMenuModal: React.FC<CreateMenuProps> = ({ modalIsVisible }) => {
    const { setIsVisible } = useContext(CreateMenuContext)
    const { navigate } = useRouter()

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalIsVisible}
            >
                <View style={StyledModalWithInput.container}>
                    <View style={StyledModalWithInput.modalContainer}>
                        <TouchableOpacity
                            style={StyledModalWithInput.cardContainer}
                            onPress={() => navigate('(notes)/createFile')}
                        >
                            <View style={[StyledModalWithInput.card, { backgroundColor: '#835ED6' }]}>
                                <FolderPlus color={"#fff"} />
                            </View>
                            <Text style={StyledModalWithInput.title}>Criação de notas de texto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={StyledModalWithInput.cardContainer}
                            onPress={() => navigate('(modal)/CreateAudioNote')}
                        >
                            <View style={[StyledModalWithInput.card, { backgroundColor: '#E93147' }]}>
                                <AudioLines color={"#fff"} />
                            </View>
                            <Text style={StyledModalWithInput.title}>Criação de notas de áudio</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default CreateMenuModal



const StyledModalWithInput = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingBlock: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#24222255',
    },

    modalContainer: {
        width: '100%',
        borderRadius: 16,
        gap: 16,
        padding: 16,
        backgroundColor: '#fff',

        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#a0a4ad',
    },

    title: {
        color: themeColors.text.title,
        fontWeight: 'semibold',
        fontSize: 18,
    },

    subTitle: {
        color: themeColors.text.subTitle,
        fontWeight: 'medium',
        fontSize: 14,
    },


    cardContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    card: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 16,
    },
});
