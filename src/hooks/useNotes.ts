import { useEffect, useState } from 'react';
import type { Notes, SqlNote } from '../types/types/notes';
import { getModifiedCategory } from '../utils/getModifiedCategory';
import { useDatabase } from './useDatabase';

export function useNotes() {
	const db = useDatabase();
	const [notes, setNotes] = useState<Notes[]>([]);

	const loadNotes = async () => {
		if (!db) {
			return;
		}

		const queryNotes: SqlNote[] = await db.getAllAsync(`
				SELECT
  				notes.id,
  				notes.name AS name,
  				notes.content,
  				notes.action_at AS actionAt,
  				actions.name AS action,
  				folders.name AS category
  				FROM notes
  				JOIN actions ON notes.action_id = actions.id
  				JOIN folders ON notes.folder_id = folders.id;
		`);

		const fillNotes = queryNotes.map((item) => ({
			...item,
			actionAt: new Date(item.actionAt),
			modifiedCategory: getModifiedCategory(new Date(item.actionAt)),
		}));

		setNotes(fillNotes);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		loadNotes();
	}, [db]);

	return { notes, reload: loadNotes };
}
