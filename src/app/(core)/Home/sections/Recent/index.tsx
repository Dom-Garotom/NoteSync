import React from 'react'
import { View, StyleSheet } from 'react-native'
import { mockNotes } from '@/src/db/mocks/notes'

import ModifiedTimeCategory from '@/src/components/molecules/ModifiedCategory'

const Recent: React.FC = () => {
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
          const notes = mockNotes.filter(note => note.modifiedCategory === item)

          return (
            <ModifiedTimeCategory
              categoryName={item}
              notes={notes}
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
    marginBottom: 120
  },
})
