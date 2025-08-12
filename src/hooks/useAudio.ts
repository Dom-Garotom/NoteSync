import { useEffect, useState } from 'react';
import { useDatabase } from './useDatabase';

export type AudioType = {
	id: number;
	folderId: number;
	name: string;
	uri: string;
};

export const useAudio = () => {
	const db = useDatabase();
	const [audios, setAudios] = useState<AudioType[]>([]);

	const loadAudios = async () => {
		try {
			if (!db) {
				return;
			}

			const data = await db.getAllAsync('SELECT * FROM audio ');
			console.log(data);
			setAudios(data as AudioType[]);
		} catch (error) {
			console.log(error);
		}
	};

	// biome-ignore lint/nursery/noShadow: <explanation>
	const createAudio = async (folderId: number, name: string, uri: string) => {
		if (!db) {
			return;
		}

		await db.runAsync(
			'INSERT INTO audio (folderId, name, uri) VALUES (?, ?, ?)',
			folderId,
			name,
			uri,
		);

		await loadAudios();
	};

	const deleteAudio = async (id: number) => {
		if (!db) {
			return;
		}

		await db.runAsync('DELETE FROM audio WHERE id = ?', id);
		await loadAudios();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		loadAudios();
	}, [db]);

	return {
		audios,
		createAudio,
		deleteAudio,
		reload: loadAudios,
	};
};
