import React from 'react'
import CategoryNote from '@/src/components/atoms/CategoryNote'
import { useFolders } from '@/src/hooks/useFolder'
import { useNotes } from '@/src/hooks/useNotes'
import { useAudio } from '@/src/hooks/useAudio'



const WorkSpace: React.FC = () => {
  const { folders } = useFolders()
  const { notes } = useNotes()
  const { audios } = useAudio()

  return (
    <>
      {
        folders.map((item, index) => {
          const filteredNotes = notes.filter(note => note.category === item.name)
          const filteredAudios = audios.filter(note => note.folderId === item.id)
          return (
            <CategoryNote
              categoryName={item.name}
              notes={filteredNotes}
              audio={filteredAudios}
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