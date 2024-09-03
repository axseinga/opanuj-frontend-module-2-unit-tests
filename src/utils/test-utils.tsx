import { render as rtlRender } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function render(ui: ReactElement, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter> });
}