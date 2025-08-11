import type { Notes } from './../../types/types/notes';

export const mockFavorites: Notes[] = [
	{
		id: 1,
		name: 'Planejamento do sprint',
		content:
			'Reunião com a equipe para definir prioridades, revisar backlog e alinhar prazos. Importante incluir ajustes solicitados pelo cliente na última reunião.',
		actionAt: new Date('2025-08-10T09:15:00'),
		action: 'criado',
		modifiedCategory: 'Hoje',
		category: 'trabalho',
	},
	{
		id: 2,
		name: 'Revisão de capítulo de banco de dados',
		content:
			'Estudar normalização até 3FN, relacionamentos entre tabelas e diferenças entre chaves primárias e estrangeiras. Anotar exemplos para revisão.',
		actionAt: new Date('2025-08-10T11:30:00'),
		action: 'editado',
		modifiedCategory: 'Hoje',
		category: 'faculdade',
	},
	{
		id: 3,
		name: 'Lista de compras para a semana',
		content:
			'Comprar arroz, feijão, massa integral, frango, verduras frescas, frutas variadas, leite e café. Evitar compras desnecessárias para manter orçamento.',
		actionAt: new Date('2025-08-10T14:00:00'),
		action: 'criado',
		modifiedCategory: 'Hoje',
		category: 'pessoal',
	},
	{
		id: 4,
		name: 'Anotações sobre React Hooks',
		content:
			'Estudar useEffect, useMemo e custom hooks. Criar exemplos práticos e verificar boas práticas para evitar re-renderizações desnecessárias.',
		actionAt: new Date('2025-08-10T16:20:00'),
		action: 'editado',
		modifiedCategory: 'Hoje',
		category: 'estudos',
	},
	{
		id: 5,
		name: 'Checklist para apresentação',
		content:
			'Testar slides no projetor, verificar áudio e microfone, levar adaptador HDMI, revisar roteiro e preparar respostas para perguntas comuns.',
		actionAt: new Date('2025-08-09T09:00:00'),
		action: 'criado',
		modifiedCategory: 'Ontem',
		category: 'trabalho',
	},
	{
		id: 6,
		name: 'Resumo de aula de algoritmos',
		content:
			'Estudar busca binária, complexidade O(log n) e análise de tempo. Implementar exemplo em JavaScript e documentar com comentários claros.',
		actionAt: new Date('2025-08-09T13:45:00'),
		action: 'editado',
		modifiedCategory: 'Ontem',
		category: 'faculdade',
	},
	{
		id: 7,
		name: 'Organização da casa',
		content:
			'Separar roupas para doação, limpar cozinha, organizar livros por categorias e revisar gavetas para descartar itens sem uso.',
		actionAt: new Date('2025-08-09T18:20:00'),
		action: 'criado',
		modifiedCategory: 'Ontem',
		category: 'pessoal',
	},
];
