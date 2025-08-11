import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Notes } from '@/src/types/types/notes'

import { ChevronDown, ChevronRight, FileTextIcon, Plus } from 'lucide-react-native'
import { themeColors } from '@/src/styles/colors'
import { StyledCategory } from './style'


interface CategoryProps {
    categoryName: string
    notes: Notes[],
    createCategoryOption: boolean,
    initOpen: boolean,
}

const CategoryNote: React.FC<CategoryProps> = ({ categoryName, notes, createCategoryOption, initOpen = false }) => {
    const [expanded, setExpanded] = useState(initOpen)

    return (
        <View style={{ width: '110%' }}>
            <TouchableOpacity
                onPress={() => setExpanded(!expanded)}
                style={StyledCategory.categoryButton}
            >

                <View style={StyledCategory.categoryButtonContainer}>
                    {expanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}

                    <Text style={StyledCategory.categoryName}>
                        {categoryName}
                    </Text>
                </View>

                {createCategoryOption && <Plus size={18} color={themeColors.text.contrast} />}
            </TouchableOpacity>

            {expanded && (
                <View style={StyledCategory.notesContainer}>
                    {notes.map((note, index) => (
                        <View
                            key={index}
                            style={StyledCategory.noteItem}
                        >
                            <FileTextIcon size={18} />
                            <Text style={{ fontSize: 14 }}>{note.name}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    )
}

export default CategoryNote
