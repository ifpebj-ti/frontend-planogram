
import React from 'react'; 
import { render } from '@testing-library/react';
import Home from '../src/app/page';

it('should render the main component', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
