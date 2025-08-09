import NotificationItem from '@/src/components/atoms/NotificationItem'
import PageTemplate from '@/src/components/template/PageTemplate'
import { themeColors } from '@/src/styles/colors'
import { MegaphoneOff } from 'lucide-react-native'
import React from 'react'
import {  Text, View } from 'react-native'
import { StyledNotification } from './style'


const Notifications: React.FC = () => {

    const notifications = [
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
        {
            title: 'Lembre-se de checar a sua nota de : Aula de revisão de Redes',
            data: '11.00 AM'
        },
    ]


    return (
        <PageTemplate>
            <View style={StyledNotification.headerContainer}>
                <Text style={StyledNotification.title}>Notificações</Text>
                <Text style={StyledNotification.subTitle}>Cheque as suas notificações mais recenes</Text>
            </View>

            {notifications.length <= 0 ?
                (
                    <View style={StyledNotification.fallbackContainer}>
                        <View style={StyledNotification.notificationIcon}>
                            <MegaphoneOff color={themeColors.background.base} />
                        </View>
                        <Text style={[StyledNotification.title, { textAlign: 'center', fontSize: 20 }]}>Sem notificações no momento</Text>
                        <Text style={[StyledNotification.subTitle, { textAlign: 'center' }]}>
                            Sua caixa de entrada de notificações está vázia no momento,
                            caso não esteja recebendo as notificações aconselho a checar as permissões do app.
                        </Text>
                    </View>
                ) :
                (
                    notifications.map((item, index) => (
                        <NotificationItem
                            key={index}
                            title={item.title}
                            date={item.data}
                        />
                    ))
                )
            }
        </PageTemplate>
    )
}

export default Notifications
