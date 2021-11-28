import { render } from '@testing-library/react';
import Application from '../app';

test('App component should render successfully', () => {
  const { baseElement } = render(<Application />);
  expect(baseElement).toBeTruthy();
});
