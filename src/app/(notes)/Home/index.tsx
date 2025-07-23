import { AuthContext } from '@/src/context/model/authContextModel'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


const Home: React.FC = () => {
    const { id , logout  } = useContext(AuthContext)

    return (
        <View>
            <Text>Home page</Text>
            <Text>My ID : {id}</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home