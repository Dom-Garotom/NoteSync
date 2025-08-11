import type { Notes } from '@/src/types/types/notes';

export const mockNotes: Notes[] = [
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
	{
		id: 8,
		name: 'Estudo de arquitetura de software',
		content:
			'Revisar padrões MVC, Clean Architecture e microservices. Fazer diagrama comparativo com vantagens e desvantagens.',
		actionAt: new Date('2025-08-08T08:40:00'),
		action: 'criado',
		modifiedCategory: 'Ultimos 7 dias',
		category: 'estudos',
	},
	{
		id: 9,
		name: 'Notas para artigo técnico',
		content:
			'Escrever sobre autenticação JWT, explicar fluxo de login e refresh token, incluir exemplos com Node.js e Express.',
		actionAt: new Date('2025-08-08T15:10:00'),
		action: 'editado',
		modifiedCategory: 'Ultimos 7 dias',
		category: 'anotações',
	},
	{
		id: 10,
		name: 'Reunião com fornecedor',
		content:
			'Negociar novos prazos de entrega, discutir ajuste de preços e confirmar disponibilidade de estoque para os próximos dois meses.',
		actionAt: new Date('2025-08-07T09:30:00'),
		action: 'criado',
		modifiedCategory: 'Ultimos 7 dias',
		category: 'trabalho',
	},
	{
		id: 11,
		name: 'Resumo de disciplina de redes',
		content:
			'Estudar camadas do modelo OSI, protocolos TCP/IP e diferenças entre UDP e TCP. Criar mapa mental para revisão rápida.',
		actionAt: new Date('2025-08-07T14:25:00'),
		action: 'criado',
		modifiedCategory: 'Ultimos 7 dias',
		category: 'faculdade',
	},
	{
		id: 12,
		name: 'Agenda de manutenção do carro',
		content:
			'Troca de óleo, alinhamento e balanceamento, revisão do sistema de freios e checagem de fluidos.',
		actionAt: new Date('2025-08-06T17:50:00'),
		action: 'editado',
		modifiedCategory: 'Ultimos 7 dias',
		category: 'pessoal',
	},
	{
		id: 13,
		name: 'Estudo de Docker e containers',
		content:
			'Aprender comandos básicos, criar containers para backend e frontend e entender volumes e redes.',
		actionAt: new Date('2025-08-05T10:00:00'),
		action: 'criado',
		modifiedCategory: 'Ultimos 7 dias',
		category: 'estudos',
	},
	{
		id: 14,
		name: 'Rascunho para novo projeto',
		content:
			'Ideia de app para gerenciar tarefas com integração de calendário e notificações push.',
		actionAt: new Date('2025-08-05T18:30:00'),
		action: 'criado',
		modifiedCategory: 'Ultimos 7 dias',
		category: 'anotações',
	},
	{
		id: 15,
		name: 'Checklist de deploy',
		content:
			'Verificar build, rodar testes automatizados, configurar variáveis de ambiente e validar logs no ambiente de produção.',
		actionAt: new Date('2025-08-04T09:00:00'),
		action: 'criado',
		modifiedCategory: 'Esse mês',
		category: 'trabalho',
	},
	{
		id: 16,
		name: 'Anotações de aula de cálculo',
		content:
			'Revisar derivadas, integrais e limites. Resolver exercícios para fixar conteúdo.',
		actionAt: new Date('2025-08-04T11:15:00'),
		action: 'editado',
		modifiedCategory: 'Esse mês',
		category: 'faculdade',
	},
	{
		id: 17,
		name: 'Planejamento de viagem',
		content:
			'Reservar hotel, verificar voos, criar roteiro de passeios e orçamento.',
		actionAt: new Date('2025-08-03T14:00:00'),
		action: 'criado',
		modifiedCategory: 'Esse mês',
		category: 'pessoal',
	},
	{
		id: 28,
		name: 'Estudo de APIs REST',
		content:
			'Entender métodos HTTP, status codes e boas práticas de versionamento.',
		actionAt: new Date('2025-07-22T14:00:00'),
		action: 'criado',
		modifiedCategory: 'Mais de um mês',
		category: 'estudos',
	},
	{
		id: 29,
		name: 'Anotações sobre liderança',
		content:
			'Técnicas de comunicação, feedback construtivo e motivação de equipe.',
		actionAt: new Date('2025-07-21T11:50:00'),
		action: 'criado',
		modifiedCategory: 'Mais de um mês',
		category: 'anotações',
	},
];
