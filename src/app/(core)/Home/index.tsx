import React, { ReactNode, useState } from 'react'
import { Image, Text, View } from 'react-native'

import PageTemplate from '@/src/components/template/PageTemplate'
import SectionSwitch from '@/src/components/molecules/SectionSwap'
import WorkSpace from './sections/workSpace'
import Recent from './sections/Recent'
import Favorites from './sections/Favorites'
import { StyledHome } from './style'


interface SectionType {
    workspace: ReactNode
    favorites: ReactNode
    recent: ReactNode
}

const Home: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<keyof SectionType>('workspace')

    const sections = {
        workspace: <WorkSpace />,
        favorites: <Favorites />,
        recent: <Recent />
    }

    return (
        <PageTemplate
            style={{ gap: 10 }}
        >
            <View style={StyledHome.header}>
                <View >
                    <Text style={StyledHome.title}>Samanta</Text>
                    <Text style={StyledHome.subTitle}>Alguma nota nova em mente ?</Text>
                </View>
                <Image
                    source={require('../../../assets/images/home/samanta-user.png')}
                    style={StyledHome.userImage}
                />
            </View>

            <SectionSwitch
                currentSwitchSection={(state) => setCurrentSection(state as keyof SectionType)}
            />

            {sections[currentSection]}
        </PageTemplate>
    )
}

export default Home
