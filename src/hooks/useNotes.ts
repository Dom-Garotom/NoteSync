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

	const createNote = async (
		name: string,
		content: string,
		actionId: number,
		folderId: number,
	) => {
		if (!db) {
			return;
		}

		const now = new Date().toISOString();

		await db.runAsync(
			`
			INSERT INTO notes (name, content, action_id, folder_id, action_at)
			VALUES (?, ?, ?, ?, ?)
			`,
			[name, content, actionId, folderId, now],
		);

		await loadNotes();
	};

	const updateNote = async (
		id: number,
		name: string,
		content: string,
		actionId: number,
	) => {
		if (!db) {
			return;
		}

		const now = new Date().toISOString();

		await db.runAsync(
			`
			UPDATE notes
			SET name = ?, content = ?, action_id = ?,  action_at = ?
			WHERE id = ?
			`,
			[name, content, actionId, now, id],
		);

		await loadNotes();
	};

	const deleteNote = async (id: number) => {
		if (!db) {
			return;
		}

		await db.runAsync(
			`
			DELETE FROM notes
			WHERE id = ?
			`,
			[id],
		);

		await loadNotes();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		loadNotes();
	}, [db]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>

	return { notes, createNote, updateNote, deleteNote, reload: loadNotes };
}
