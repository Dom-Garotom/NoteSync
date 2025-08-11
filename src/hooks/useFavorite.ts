import { useEffect, useState } from 'react';
import type { FavoriteNote } from '../types/types/notes';
import { useDatabase } from './useDatabase';

export const useFavorites = () => {
	const db = useDatabase();
	const [favorites, setFavorites] = useState<FavoriteNote[]>([]);

	const loadFavorite = async () => {
		if (!db) {
			return;
		}

		const favoriteNotes = await db.getAllAsync(`
			SELECT noteid as id , name  FROM notes 
			JOIN favorites ON favorites.noteId = notes.id 
		`);

		setFavorites(favoriteNotes as FavoriteNote[]);
	};

	const createFavorite = async (noteId: string) => {
		if (!db) {
			return;
		}

		await db.runAsync('INSERT INTO favorites (noteId) VALUES ( ? );', noteId);
		loadFavorite();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		loadFavorite();
	}, [db]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (favorites.length === 0) {
			loadFavorite();
		}
	}, [db, favorites]);

	return {
		favorites,
		createFavorite,
		reload: loadFavorite,
	};
};
