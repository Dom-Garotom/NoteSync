import React from 'react'
import { View, StyleSheet } from 'react-native'

import ModifiedTimeCategory from '@/src/components/molecules/ModifiedCategory'
import { useNotes } from '@/src/hooks/useNotes'

const Recent: React.FC = () => {
  const { notes  } = useNotes()
  const modifiedCategory = [
    'Hoje',
    'Ontem',
    'Ultimos 7 dias',
    'Esse mês',
    'Mais de um mês'
  ]

  return (
    <View style={StyledRecentPage.page}>
      {
        modifiedCategory.map((item, index) => {
          const filteredNotes = notes.filter(note => note.modifiedCategory === item)


          return (
            <ModifiedTimeCategory
              categoryName={item}
              notes={filteredNotes}
              key={index}
            />
          )

        })
      }
    </View>
  )
}

export default Recent


const StyledRecentPage = StyleSheet.create({
  page: {
    paddingBottom: 120,
  },
})
