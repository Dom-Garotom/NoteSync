import type { SQLiteDatabase } from 'expo-sqlite';
import { createContext } from 'react';

type DBContextType = {
	db: SQLiteDatabase | null;
};

export const DatabaseContext = createContext<DBContextType>({ db: null });
