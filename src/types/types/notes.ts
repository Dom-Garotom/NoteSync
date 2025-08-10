export type ActionType = 'criado' | 'editado';
export type CategoryType =
	| 'trabalho'
	| 'faculdade'
	| 'pessoal'
	| 'estudos'
	| 'anotações';

export interface Notes {
	id: number;
	name: string;
	conteudo: string;
	actionAt: Date;
	action: ActionType;
	category: CategoryType;
}
