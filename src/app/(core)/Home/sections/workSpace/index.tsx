import React from 'react'
import { categories } from '@/src/db/mocks/category'
import { mockNotes } from '@/src/db/mocks/notes'
import Category from '@/src/components/atoms/Category'



const WorkSpace: React.FC = () => {
  const Categories = categories

  return (
    <>
      {
        Categories.map((item, index) => {
          const notes = mockNotes.filter(note => note.category === item)
          return (
            <Category
              categoryName={item}
              notes={notes}
              createCategoryOption={index === 0 ? true : false}
              key={index}
            />
          )
        })
      }
    </>
  )
}

export default WorkSpace