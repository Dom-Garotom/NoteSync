import React from 'react'
import { Text, View, FlatList } from 'react-native'

import { mockFavorites } from '@/src/db/mocks/favorite'
import { FileTextIcon } from 'lucide-react-native'
import { StyledFavorite } from './style';

const Favorites: React.FC = () => {
  return (
    <View>
      <FlatList
        data={mockFavorites}
        keyExtractor={item => item.id.toString()}
        renderItem={
          ({ item }) => (
            <View
              key={item.id}
              style={StyledFavorite.noteItem}
            >
              <View style={StyledFavorite.noteItemHeader}>
                <FileTextIcon size={18} />
                <Text style={StyledFavorite.noteName}>{item.name}</Text>
              </View>
              <Text style={StyledFavorite.noteContentText}>{item.conteudo}</Text>
            </View>
          )
        }
        scrollEnabled={false}
        contentContainerStyle={StyledFavorite.notesContainer}
      />

    </View>
  )
}

export default Favorites
