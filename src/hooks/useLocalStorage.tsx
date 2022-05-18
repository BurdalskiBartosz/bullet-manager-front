export const useLocalStorage = () => {
	const getItem = (item: string) => {
		const data = localStorage.getItem(item);
		if (data) {
			return JSON.parse(data);
		}
		return 'Not found';
	};

	const setItem = (item: string, data: any) => {
		localStorage.setItem(item, JSON.stringify(data));
	};
	const removeItem = (item: string) => {
		localStorage.removeItem(item);
	};

	return {
		getItem,
		setItem,
		removeItem
	};
};
