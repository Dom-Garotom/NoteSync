import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'

import { mockFavorites } from '@/src/db/mocks/favorite'
import { StarIcon } from 'lucide-react-native'
import { StyledFavorite } from './style';
import { useRouter } from 'expo-router';

const Favorites: React.FC = () => {
  const { push } = useRouter()


  return (
    <View>
      <FlatList
        data={mockFavorites}
        keyExtractor={item => item.id.toString()}
        renderItem={
          ({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={StyledFavorite.noteItem}
              onPress={() => push(`(notes)/file/${item.id}`)}
            >
              <StarIcon size={18} color={'#FFA508'} />
              <Text style={StyledFavorite.noteName}>{item.name}</Text>
            </TouchableOpacity>
          )
        }
        scrollEnabled={false}
        contentContainerStyle={StyledFavorite.notesContainer}
      />

    </View>
  )
}

export default Favorites
