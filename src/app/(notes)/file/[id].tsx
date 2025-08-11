import PageTemplate from '@/src/components/template/PageTemplate'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

interface FileProps {
    text: string
}

const File: React.FC<FileProps> = () => {
    const { id } = useLocalSearchParams<{ id: string }>()

    return (
        <PageTemplate>
            <Text>Edit or create file</Text>
            <Text>Page id  {id}</Text>
        </PageTemplate>
    )
}

export default File