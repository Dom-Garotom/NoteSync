// biome-ignore lint/performance/noNamespaceImport: <explanation>
import * as SQLite from 'expo-sqlite';

export const openDatabase = async () => {
	const db = await SQLite.openDatabaseAsync('notes');
	return db;
};
