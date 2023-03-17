export type tTableData = {
	id: number;
	data: {
		key: string | number;
		value: number | string | string[] | JSX.Element;
	}[];
};
