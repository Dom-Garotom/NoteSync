import type { SQLiteDatabase } from 'expo-sqlite';

export const createTables = async (db: SQLiteDatabase) => {
	try {
		await db.execAsync('PRAGMA foreign_keys = ON;');

		await db.execAsync(`
            CREATE TABLE IF NOT EXISTS folders (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL
            );

            INSERT INTO folders (id, name) VALUES ( 1 , 'pessoal');
            INSERT INTO folders (id, name) VALUES ( 2 , 'trabalho');
            INSERT INTO folders (id, name) VALUES ( 3 , 'estudos');
            INSERT INTO folders (id, name) VALUES ( 4 , 'anotações');
            INSERT INTO folders (id, name) VALUES ( 5 , 'faculdade');
        `);

		await db.execAsync(`
            CREATE TABLE IF NOT EXISTS actions (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL
            );

            INSERT INTO actions (id , name ) VALUES ( 1 , 'criado' );
            INSERT INTO actions (id , name ) VALUES ( 2 , 'editado' );
        `);

		await db.execAsync(`
            CREATE TABLE IF NOT EXISTS notes (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              content TEXT,
              action_at TEXT,
              action_id INTEGER NOT NULL,
              folder_id INTEGER NOT NULL,
              FOREIGN KEY (action_id) REFERENCES actions(id),
              FOREIGN KEY (folder_id) REFERENCES folders(id)
            );

            INSERT INTO notes (name, content, action_at, action_id, folder_id) VALUES
            ('Comprar leite', 
             'Lembrete para comprar leite no mercado amanhã de manhã. Verificar validade do leite e optar pela marca preferida.', 
             '2025-08-10 10:00:00', 1, 1),
                    
            ('Projeto React', 
             'Implementar hook useFolders para carregar, criar e deletar pastas no app. Testar integração com SQLite e corrigir bugs de atualização.', 
             '2025-08-09 15:30:00', 1, 2),
                    
            ('Resumo de matemática', 
             'Estudar derivadas e integrais, focando em aplicações práticas e exercícios de física. Revisar as fórmulas principais e teoremas.', 
             '2025-08-08 20:00:00', 2, 3),
                    
            ('Lista de compras', 
             'Arroz, feijão, macarrão, óleo de cozinha, legumes frescos (tomate, cebola, alface) e frutas da estação para a semana.', 
             '2025-08-07 18:45:00', 1, 4),
                    
            ('Planejamento da semana', 
             'Organizar tarefas da faculdade, distribuir horários de estudo, reuniões e prazos de entrega. Priorizar trabalhos mais urgentes.', 
             '2025-08-06 09:00:00', 2, 5);
        `);

		await db.execAsync(`
            CREATE TABLE IF NOT EXISTS favorites (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              noteId INTEGER NOT NULL,
              FOREIGN KEY (noteId) REFERENCES notes(id) ON DELETE CASCADE
            );

            INSERT INTO favorites (noteId) VALUES (1);
            INSERT INTO favorites (noteId) VALUES (2);
        `);

		// biome-ignore lint/suspicious/noConsole: <explanation>
		console.log('Tabelas criadas com sucesso');
	} catch (error) {
		// biome-ignore lint/suspicious/noConsole: <explanation>
		console.log('Não foi possível criar as tabelas : ', error);
	}
};
