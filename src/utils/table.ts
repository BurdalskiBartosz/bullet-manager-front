import { tTableData } from 'types/table';
// import { UserTask } from 'view/Tasks/UserTasks';

type tData = any;

export const transformApiToTableData = (data: tData[], offset: number) =>
	data.map(({ id, ...rest }, index) => ({
		id: id ?? '',
		data: [
			...(Object.keys(rest) as Array<keyof typeof rest>).map((key) => {
				return { key, value: rest[key] };
			})
		]
	})) as tTableData[];
