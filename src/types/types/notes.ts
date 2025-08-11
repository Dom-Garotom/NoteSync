export type ActionType = 'criado' | 'editado';
export type CategoryType =
	| 'trabalho'
	| 'faculdade'
	| 'pessoal'
	| 'estudos'
	| 'anotações';

export type ModifiedCategory =
	| 'Hoje'
	| 'Ontem'
	| 'Ultimos 7 dias'
	| 'Esse mês'
	| 'Mais de um mês';

export interface Notes {
	id: number;
	name: string;
	content: string;
	actionAt: Date;
	action: ActionType;
	modifiedCategory: ModifiedCategory;
	category: string;
}

export interface FolderType {
	id: number;
	name: string;
}

export interface FavoriteNote {
	id: number;
	name: string;
}

export interface SqlNote {
	id: number;
	name: string;
	content: string;
	actionAt: Date;
	action: ActionType;
	category: string;
}
