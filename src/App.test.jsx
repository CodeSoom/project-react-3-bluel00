import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('renders the home page', () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent('RESCAT');
});
