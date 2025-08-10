import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

export const StyledHome = StyleSheet.create({
	userImage: {
		width: 60,
		height: 60,
		borderRadius: 100,
	},

	header: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
	},

	title: {
		color: themeColors.text.title,
		fontWeight: 'semibold',
		fontSize: 26,
		fontFamily: 'Montserrat',
	},

	subTitle: {
		color: themeColors.text.subTitle,
		fontWeight: 'medium',
		fontSize: 16,
		fontFamily: 'Montserrat',
	},
});
