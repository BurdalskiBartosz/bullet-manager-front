import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { tasksApi } from 'store/api/task';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { AppStore, RootState } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';

const middlewares = [tasksApi.middleware];

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = configureStore({
			reducer: {
				[tasksApi.reducerPath]: tasksApi.reducer
			},
			preloadedState,
			middleware: (getDefaultMiddleware) =>
				getDefaultMiddleware().concat(middlewares)
		}),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>) {
		return (
			<BrowserRouter>
				<Provider store={store}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</Provider>
			</BrowserRouter>
		);
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders as render };
export * from '@testing-library/react';
