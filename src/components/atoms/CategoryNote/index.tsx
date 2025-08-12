import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Notes } from '@/src/types/types/notes'

import { ChevronDown, ChevronRight, FileTextIcon, Plus } from 'lucide-react-native'
import { themeColors } from '@/src/styles/colors'
import { StyledCategory } from './style'
import { useRouter } from 'expo-router'
import { showToast } from '@/src/utils/showToast'
import ModalWithInput from '../../molecules/ModalWithInput'
import { useFolders } from '@/src/hooks/useFolder'
import { AudioType } from '@/src/hooks/useAudio'
import { AudioPLayer } from '../AudioPlayer'
import { useFavorites } from '@/src/hooks/useFavorite'


interface CategoryProps {
    categoryName: string
    notes: Notes[],
    audio: AudioType[],
    createCategoryOption: boolean,
    initOpen: boolean,
}

const CategoryNote: React.FC<CategoryProps> = ({ categoryName, notes, createCategoryOption, initOpen = false, audio }) => {
    const [expanded, setExpanded] = useState(initOpen)
    const [modalVisible, setModalVisible] = useState(false);
    const { createFolder, reload } = useFolders()
    const { push } = useRouter()
    const { createFavorite } =  useFavorites()


    const addNoteToFavorite = async ( noteId : number ) => {
        await createFavorite(noteId)
        showToast('success' , 'Sua nota foi adicionada aos favoritos com sucesso')
    }


    return (
        <View style={{ width: '110%' }}>


            <View style={StyledCategory.categoryButton}>
                <TouchableOpacity
                    onPress={() => setExpanded(!expanded)}
                >

                    <View style={StyledCategory.categoryButtonContainer}>
                        {expanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}

                        <Text style={StyledCategory.categoryName}>
                            {categoryName}
                        </Text>
                    </View>
                </TouchableOpacity>

                {createCategoryOption &&
                    <Plus
                        size={18}
                        color={themeColors.text.contrast}
                        onPress={() => setModalVisible(true)}
                    />
                }
            </View>



            {expanded && (
                <View style={StyledCategory.notesContainer}>
                    {notes.map((note, index) => (
                        <TouchableOpacity
                            key={index}
                            style={StyledCategory.noteItem}
                            onPress={() => push(`(notes)/file/${note.id}`)}
                            onLongPress={() => addNoteToFavorite(note.id)}
                        >
                            <FileTextIcon size={18} />
                            <Text style={{ fontSize: 14 }}>{note.name}</Text>
                        </TouchableOpacity>
                    ))}

                    {audio.map((item) => (
                        <AudioPLayer
                            name={item.name}
                            uri={item.uri}
                            key={item.id}
                        />
                    ))}
                </View>
            )}


            {createCategoryOption &&
                <ModalWithInput
                    title='Criando uma nova categoria'
                    subTitle='Defina um nome para a sua nova categoria da nota .'
                    modalIsVisible={modalVisible}
                    onCancel={setModalVisible}
                    onConfirm={(e) => {
                        createFolder(e)
                        reload()
                        setModalVisible(false)
                        showToast('success', 'Sua nova categoria foi criada com sucesso', 'Acesse agora sua categoria e cria diversas notas.')
                    }}
                />
            }
        </View>
    )
}

export default CategoryNote
