import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledNotificationItem = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		gap: 12,
	},

	title: {
		width: '63%',
		fontSize: 16,
		color: themeColors.text.title,
	},

	subTitle: {
		fontSize: 14,
		color: themeColors.text.subTitle,
	},

	notificationIcon: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 50,
		height: 50,
		marginBottom: 12,
		borderRadius: '100%',
		backgroundColor: themeColors.accent.icons,
	},
});
