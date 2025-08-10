import type { Notes } from './../../types/types/notes';


export const  mockFavorites : Notes[] = [
    	{
		id: 1,
		name: 'Primeiro Post',
		conteudo: 'Este é o conteúdo do primeiro post de teste.',
		actionAt: new Date('2025-08-01T10:00:00'),
		action: 'criado',
		category: 'pessoal',
	},
	{
		id: 2,
		name: 'Segundo Post',
		conteudo:
			'Mais um post de exemplo, com texto um pouco mais longo para teste.',
		actionAt: new Date('2025-08-03T14:30:00'),
		action: 'criado',
		category: 'trabalho',
	},
	{
		id: 3,
		name: 'Dicas de Markdown',
		conteudo:
			'Use **negrito**, *itálico* e `código inline` para formatar suas notas.',
		actionAt: new Date('2025-08-07T09:15:00'),
		action: 'editado',
		category: 'estudos',
	},
	{
		id: 4,
		name: 'Reflexão Rápida',
		conteudo: 'Às vezes, escrever ajuda a organizar as ideias. ✍️',
		actionAt: new Date('2025-08-09T18:45:00'),
		action: 'criado',
		category: 'anotações',
	},
	{
		id: 5,
		name: 'Reunião de Projeto',
		conteudo:
			'Checklist da reunião: alinhar escopo, revisar prazos e definir responsáveis.',
		actionAt: new Date('2025-08-05T09:00:00'),
		action: 'editado',
		category: 'trabalho',
	},
	{
		id: 6,
		name: 'Resumo Aula de Redes',
		conteudo:
			'Camadas OSI: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação.',
		actionAt: new Date('2025-07-29T15:40:00'),
		action: 'criado',
		category: 'faculdade',
	},
]