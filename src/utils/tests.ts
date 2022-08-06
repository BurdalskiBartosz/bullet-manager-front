import { render } from '@testing-library/react';
import Providers from '../providers';

const customRender = (ui: any) => render(ui, { wrapper: Providers });

export * from '@testing-library/react';

export { customRender as render };
