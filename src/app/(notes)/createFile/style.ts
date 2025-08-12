import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		flexDirection: 'row',
		padding: 20,
		alignItems: 'center',
		position: 'absolute',
		top: 20,
	},

	headerButton: {},

	card: {
		flex: 1,
	},

	cover: {
		height: 200,
		justifyContent: 'flex-end',
		padding: 20,
	},

	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},

	title: {
		color: '#fff',
		fontSize: 22,
		fontWeight: '600',
	},

	content: {},
});
