import { StyleSheet } from 'react-native';

export const markdownStyles = StyleSheet.create({
	body: {
		color: '#1a1a1a',
		fontSize: 15,
		lineHeight: 22,
	},

	heading1: {
		color: '#7B5DC9',
		fontSize: 24,
		fontWeight: '700',
		marginTop: 20,
		marginBottom: 10,
	},

	heading2: {
		color: '#7B5DC9',
		fontSize: 20,
		fontWeight: '700',
		marginTop: 18,
		marginBottom: 8,
	},

	heading3: {
		color: '#7B5DC9',
		fontSize: 18,
		fontWeight: '700',
		marginTop: 14,
		marginBottom: 6,
	},

	paragraph: {
		marginBottom: 10,
	},

	bullet_list: {
		marginVertical: 8,
	},

	ordered_list: {
		marginVertical: 8,
	},

	list_item: {
		marginVertical: 4,
	},

	blockquote: {
		backgroundColor: '#F4F0FF',
		borderLeftWidth: 4,
		borderLeftColor: '#7B5DC9',
		padding: 10,
		marginVertical: 8,
		borderRadius: 6,
	},

	code_inline: {
		backgroundColor: '#EDE7F6',
		paddingHorizontal: 4,
		paddingVertical: 2,
		borderRadius: 4,
		fontFamily: 'monospace',
		color: '#4A2E83',
	},

	code_block: {
		backgroundColor: '#EDE7F6',
		padding: 8,
		borderRadius: 6,
		fontFamily: 'monospace',
		color: '#4A2E83',
		overflow: 'scroll',
	},

	fence: {
		backgroundColor: '#EDE7F6',
		padding: 8,
		borderRadius: 6,
		fontFamily: 'monospace',
		color: '#4A2E83',
		overflow: 'scroll',
	},

	strong: {
		color: '#000',
		fontWeight: 'bold',
	},

	em: {
		color: '#5E4B8B',
		fontStyle: 'italic',
	},

	link: {
		color: '#A78BFA',
		textDecorationLine: 'underline',
	},

	highlight: {
		backgroundColor: '#f7e790ff',
		borderRadius: 2,
		paddingHorizontal: 2,
	},
});
