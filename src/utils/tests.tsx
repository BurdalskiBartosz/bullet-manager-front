import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { AppStore, RootState, setupStore } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}
const reduxStore = setupStore();
export const renderWithProviders = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = reduxStore,
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({ children }: PropsWithChildren<{}>) => {
		return (
			<BrowserRouter>
				<Provider store={store}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</Provider>
			</BrowserRouter>
		);
	};

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export { renderWithProviders as render };
export * from '@testing-library/react';
