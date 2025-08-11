import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Notes } from '@/src/types/types/notes'

import { formatMonth } from '@/src/utils/formatMonth'
import { FileTextIcon } from 'lucide-react-native'
import { StyledModifiedTimeCategory } from './style'
import { useRouter } from 'expo-router'

interface ModifiedTimeCategoryProps {
    notes: Notes[],
    categoryName: string
}

const ModifiedTimeCategory: React.FC<ModifiedTimeCategoryProps> = ({ notes, categoryName }) => {
    const { push } = useRouter()

    return (
        <FlatList
            data={notes}
            keyExtractor={({ id }) => id.toString()}

            ListHeaderComponent={() => (
                <Text style={StyledModifiedTimeCategory.categoryName}>{categoryName}</Text>
            )}

            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => push(`(notes)/file/${item.id}`)}
                >
                    <View style={StyledModifiedTimeCategory.noteItemHeader} >
                        <FileTextIcon size={18} />
                        <Text>{item.name}</Text>
                    </View>
                    <View style={{ paddingLeft: 30 }}>
                        <Text
                            style={StyledModifiedTimeCategory.noteContentText}
                            numberOfLines={2}
                        >
                            {item.content}
                        </Text>
                        <Text style={StyledModifiedTimeCategory.noteUpdateDateText}>
                            {item.action} {item.modifiedCategory === 'Hoje' || item.modifiedCategory === 'Ontem' ?
                                ('as ' + item.actionAt.getHours() + ':' + item.actionAt.getMinutes())
                                :
                                ('dia ' + item.actionAt.getDay() + ' de ' + formatMonth(item.actionAt.getMonth()))
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
            scrollEnabled={false}
        />
    )
}

export default ModifiedTimeCategory

