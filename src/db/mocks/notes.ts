import type { Notes } from '@/src/types/types/notes';

export const mockNotes: Notes[] = [
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
	{
		id: 7,
		name: 'Planejamento Semanal',
		conteudo:
			'Seg: estudo React; Ter: revisão Docker; Qua: descanso; Qui: API Django; Sex: revisão geral.',
		actionAt: new Date('2025-08-04T07:20:00'),
		action: 'criado',
		category: 'pessoal',
	},
	{
		id: 8,
		name: 'Anotação Rápida',
		conteudo: 'Comprar leite, pagar conta de luz e atualizar senha do e-mail.',
		actionAt: new Date('2025-08-06T12:10:00'),
		action: 'criado',
		category: 'anotações',
	},
	{
		id: 9,
		name: 'Configuração do Nginx',
		conteudo:
			'Usar `proxy_pass` para redirecionar tráfego e configurar cache para assets estáticos.',
		actionAt: new Date('2025-08-02T16:50:00'),
		action: 'editado',
		category: 'trabalho',
	},
	{
		id: 10,
		name: 'Roteiro de Apresentação',
		conteudo: 'Introdução → Problema → Solução → Resultados → Próximos Passos.',
		actionAt: new Date('2025-08-08T11:30:00'),
		action: 'criado',
		category: 'faculdade',
	},
	{
		id: 11,
		name: 'Checklist de Publicação',
		conteudo:
			'Rodar testes, verificar SEO, otimizar imagens e enviar para produção.',
		actionAt: new Date('2025-08-01T08:00:00'),
		action: 'editado',
		category: 'trabalho',
	},
	{
		id: 12,
		name: 'Aula sobre TLB',
		conteudo:
			'Translation Lookaside Buffer ajuda a reduzir o tempo de acesso à memória virtual.',
		actionAt: new Date('2025-07-31T14:15:00'),
		action: 'criado',
		category: 'estudos',
	},
	{
		id: 13,
		name: 'Lista de Treino',
		conteudo:
			'Seg: peito e tríceps; Qua: costas e bíceps; Sex: pernas e ombros.',
		actionAt: new Date('2025-08-05T06:50:00'),
		action: 'criado',
		category: 'pessoal',
	},
	{
		id: 14,
		name: 'Revisão de Código',
		conteudo: 'Corrigir tipagem no backend e remover imports não utilizados.',
		actionAt: new Date('2025-08-09T21:05:00'),
		action: 'editado',
		category: 'trabalho',
	},
	{
		id: 15,
		name: 'Meta do Mês',
		conteudo:
			'Concluir integração de API, estudar autenticação JWT e otimizar queries no banco.',
		actionAt: new Date('2025-08-01T13:25:00'),
		action: 'criado',
		category: 'estudos',
	},
];
