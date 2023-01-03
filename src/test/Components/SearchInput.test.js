import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInput from '../../Components/SearchInput';

test('renders an input element of type text', () => {
  const { getByPlaceholderText } = render(<SearchInput search="" handleChange={() => {}} />);
  const inputElement = getByPlaceholderText('Search');
  expect(inputElement).toBeDefined();
  expect(inputElement.type).toBe('text');
});
