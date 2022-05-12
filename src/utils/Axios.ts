/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { baseURL } from './constants';

const options: AxiosRequestConfig = {
	baseURL,
	timeout: 10000,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
};

export const fetchProvider = axios.create(options);
const { interceptors } = fetchProvider;

const getRequestConfig = (config: AxiosRequestConfig) => {
	const token: string | null = window.localStorage.getItem('token');

	if (token) config.headers!.Authorization = `Bearer ${token}`;

	return config;
};

const getRequestError = (error: AxiosError) => Promise.reject(error);

const getResponse = (response: AxiosResponse) => response;

const getResponseError = (error: AxiosError) => {
	const errorResponse =
		error.response?.status === 400 ? error : error.response;
	return Promise.reject(errorResponse);
};

interceptors.request.use(getRequestConfig, getRequestError);
interceptors.response.use(getResponse, getResponseError);

export const instanceForMocks = axios.create(options);
