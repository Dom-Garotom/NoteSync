import { useEffect, useState } from 'react';
import type { FolderType } from '../types/types/notes';
import { useDatabase } from './useDatabase';

export const useFolders = () => {
	const db = useDatabase();
	const [folders, setFolders] = useState<FolderType[]>([]);

	const loadFolders = async () => {
		if (!db) {
			return;
		}

		const data = await db.getAllAsync('SELECT * FROM folders');
		setFolders(data as FolderType[]);
	};

	const createFolder = async (name: string) => {
		if (!db) {
			return;
		}

		await db.runAsync('INSERT INTO folders (name) VALUES (?)', name);
		loadFolders();
	};

	const deleteFolder = async (id: number, name: string) => {
		if (!db) {
			return;
		}

		await db.runAsync('DELETE FROM folders WHERE name = ? OR id = ?', name, id);
		loadFolders();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		loadFolders();
	}, [db]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (folders.length === 0) {
			loadFolders();
		}
	}, [db, folders]);

	return {
		folders,
		createFolder,
		deleteFolder,
		reload: loadFolders,
	};
};
