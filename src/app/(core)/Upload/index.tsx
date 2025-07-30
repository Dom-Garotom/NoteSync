import PageTemplate from '@/src/components/template/PageTemplate'
import { AuthContext } from '@/src/context/model/authContextModel'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


const Upload: React.FC = () => {
    const { id, logout } = useContext(AuthContext)

    return (
        <PageTemplate>
            <Text>Home page</Text>
            <Text>My ID : {id}</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </PageTemplate>
    )
}

export default Upload