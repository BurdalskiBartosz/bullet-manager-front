/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { baseURL } from './constants';

const options: AxiosRequestConfig = {
	baseURL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
	validateStatus: (status) => status < 500
};

export const fetchProvider = axios.create(options);
const { interceptors } = fetchProvider;

const getRequestConfig = (config: AxiosRequestConfig) => config;

const getRequestError = (error: AxiosError) => Promise.reject(error);

const getResponse = (response: AxiosResponse) => response;

const getResponseError = (error: AxiosError) => {
	const errorResponse =
		error.response?.status === 400 ? error : error.response;
	return errorResponse;
};

interceptors.request.use(getRequestConfig, getRequestError);
interceptors.response.use(getResponse, getResponseError);

export const instanceForMocks = axios.create(options);
