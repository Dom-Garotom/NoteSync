import { StyleSheet } from 'react-native';
import { themeColors } from '@/src/styles/colors';

const StyledFormSection = StyleSheet.create({
	Wrapper: {
		width: '100%',
		gap: 20,
	},

	text: {
		fontSize: 14,
		color: themeColors.text.subTitle,
	},
});

export default StyledFormSection;
