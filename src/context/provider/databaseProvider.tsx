import React, { useEffect, useState, ReactNode } from 'react';
import { DatabaseContext } from '../model/database';
import { createTables } from '@/src/database/migrations';
import { openDatabase } from '@/src/database';
import { SQLiteDatabase } from 'expo-sqlite';



export const DatabaseProvider = ({ children }: { children: ReactNode }) => {
    const [db, setDb] = useState<SQLiteDatabase | null>(null);

    useEffect(() => {
        const initDatabase = async () => {
            const dbInstance = await openDatabase();
            setDb(dbInstance);
            createTables(dbInstance)
        }

        initDatabase()
    }, []);

    if (!db) {
        return null;
    }

    return <DatabaseContext.Provider value={{ db }}>{children}</DatabaseContext.Provider>;
};

