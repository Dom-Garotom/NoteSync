import React from 'react'
import { themeColors } from '@/src/styles/colors'
import { MegaphoneOff } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyledNotificationItem } from './style'

interface NotificationItemProps {
    title: string,
    date: string
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, date }) => {
    return (
        <TouchableOpacity
            onPress={() => ''}
            activeOpacity={0.8}
            style={StyledNotificationItem.container}
        >
            <View style={StyledNotificationItem.notificationIcon}>
                <MegaphoneOff color={themeColors.background.base} size={20} />
            </View>
            <View>
                <Text style={[StyledNotificationItem.title]}>{title}</Text>
                <Text style={[StyledNotificationItem.subTitle]}>
                    {date}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NotificationItem