const mockedUser = {
	name: 'Name',
	surname: 'Surname',
	nick: 'Nick',
	avatar: {
		url: 'Url to avatar img',
		title: 'Avatar title'
	}
};

const mockedTags = [
	{
		id: 1,
		name: 'Nazwa tagu'
	}
];

const mockedSubtasks = [
	{
		id: 2,
		user: mockedUser,
		title: 'Tytuł podzadania',
		description: 'Opis podzadania',
		date: new Date(),
		plannedFinishDate: new Date(),
		priority: '1',
		order: '1', // Order of displaying subtasks
		inProgressTime: 199912319233123,
		activity: [
			{
				data: new Date(),
				type: 'Rodzaj aktywności',
				user: mockedUser
			}
		],
		comments: [
			{
				data: new Date(),
				content: 'Treść komentarza',
				user: 'Nazwa użytkownika'
			}
		],
		tags: mockedTags
	}
];

const mockedAtivityTypes = {
	ADDED: 'DODAŁ(A) TO ZADANIE DO',
	ASSIGNED: 'PRZYPISAŁ(A) TO ZADANIE DO',
	CHANGED: 'EDYTOWAŁ(A) TO ZADANIE DO',
	DELETED: 'ZOSTAŁO USUNIĘTE PRZEZ'
};

export const mockedTasks = [
	{
		id: 1, // Automatically generated identifier
		user: mockedUser,
		title: 'Tytuł',
		description: 'Opis',
		date: new Date(),
		plannedFinishDate: new Date(),
		priority: '1',
		inProgressTime: 199912319233123, // In-progress time in milliseconds
		subtasks: mockedSubtasks,
		activity: [
			{
				data: new Date(),
				type: mockedAtivityTypes['ADDED'] // For now ADDED, ASSIGNED, CHANGED, DELETED
			}
		],
		comments: [
			{
				data: new Date(),
				content: 'Treść komentarza',
				user: 'Nazwa użytkownika'
			}
		],
		tags: mockedTags
	}
];
