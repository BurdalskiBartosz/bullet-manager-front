export const getQuery = (object) => {
	if (!object) return '';
	const queryStrings = Object.entries(object).map(([key, value]) => {
		const stringKey = encodeURIComponent(key);
		if (typeof value === 'object')
			return `${stringKey}=${JSON.stringify(value)}`;
		else return `${stringKey}=${encodeURIComponent(value)}`;
	});

	if (queryStrings.length === 0) return '';
	return '?' + queryStrings.join('&');
};
