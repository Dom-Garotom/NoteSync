import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledNotification = StyleSheet.create({
	headerContainer: {
		width: '100%',
		paddingTop: 10,
	},

	title: {
		fontSize: 24,
		fontWeight: '600',
		color: themeColors.text.title,
	},

	subTitle: {
		fontSize: 16,
		fontWeight: '400',
		color: themeColors.text.subTitle,
	},

	fallbackContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 140,
	},

	notificationIcon: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		marginBottom: 12,
		borderRadius: '100%',
		backgroundColor: themeColors.accent.icons,
	},
});
