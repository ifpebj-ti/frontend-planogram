
import React from 'react'; 
import { render } from '@testing-library/react';
import Home from '../app/page';

it('should render the main component', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

