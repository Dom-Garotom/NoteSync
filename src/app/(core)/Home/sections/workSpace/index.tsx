import React from 'react'
import { mockNotes } from '@/src/db/mocks/notes'
import CategoryNote from '@/src/components/atoms/CategoryNote'
import { useFolders } from '@/src/hooks/useFolder'
import { useNotes } from '@/src/hooks/useNotes'



const WorkSpace: React.FC = () => {
  const { folders } = useFolders()
  const { notes } = useNotes()

  return (
    <>
      {
        folders.map((item, index) => {
          const filteredNotes = notes.filter( note => note.category === item.name)
          return (
            <CategoryNote
              categoryName={item.name}
              notes={filteredNotes}
              createCategoryOption={index === 0 ? true : false}
              initOpen={index === 0 ? true : false}
              key={item.id}
            />
          )
        })
      }
    </>
  )
}

export default WorkSpace