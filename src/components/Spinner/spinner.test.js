import { render } from '@testing-library/react';
import Spinner from './Spinner';

test('Renders spinner', () => {
  const {container} = render(<Spinner/>)
  expect(container.firstChild).toHaveClass('spinner-container');
});


