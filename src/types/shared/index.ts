export type tIndexSignature = {
	[key: string]: string;
};

export type tGenericIndexSignature<T> = {
	[key: string]: T;
};
