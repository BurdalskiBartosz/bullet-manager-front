import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { config } from 'src/config/config';

export const createApiDefaultConfig = () => {
	return fetchBaseQuery({
		baseUrl: `${config.baseUrl}`,
		credentials: 'include'
	});
};
