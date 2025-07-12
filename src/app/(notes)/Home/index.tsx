import { AuthContext } from '@/src/context/model/authContextModel'
import React, { useContext } from 'react'
import { Text, View } from 'react-native'


const Home: React.FC = () => {
    const { id } = useContext(AuthContext)

    return (
        <View>
            <Text>Home page</Text>
            <Text>My ID : {id}</Text>
        </View>
    )
}

export default Home