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


interface CategoryProps {
    categoryName: string
    notes: Notes[],
    createCategoryOption: boolean,
    initOpen: boolean,
}

const CategoryNote: React.FC<CategoryProps> = ({ categoryName, notes, createCategoryOption, initOpen = false }) => {
    const [expanded, setExpanded] = useState(initOpen)
    const [modalVisible, setModalVisible] = useState(false);
    const { createFolder  , reload } = useFolders()
    const { push } = useRouter()

    

    return (
        <View style={{ width: '110%' }}>

            {/* Renderização das categorias */}
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


            {/* Renderização das notas */}

            {expanded && (
                <View style={StyledCategory.notesContainer}>
                    {notes.map((note, index) => (
                        <TouchableOpacity
                            key={index}
                            style={StyledCategory.noteItem}
                            onPress={() => push(`(notes)/file/${note.id}`)}
                        >
                            <FileTextIcon size={18} />
                            <Text style={{ fontSize: 14 }}>{note.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}



            {/* Input de criar nota */}
            {createCategoryOption &&
                <ModalWithInput
                    title='Criando uma nova categoria'
                    subTitle='Defina um nome para a sua nova categoria da nota .'
                    modalIsVisible={modalVisible}
                    onCancel={setModalVisible}
                    onConfirm={ (e) => {
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
