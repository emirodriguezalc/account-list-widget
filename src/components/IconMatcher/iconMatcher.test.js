import { render } from '@testing-library/react';
import IconMatcher from './IconMatcher';

test('Renders correct icon investment', () => {
  const data = "Investment Account";
  const {container} = render(<IconMatcher data={data} />)
  expect(container.firstChild).toHaveClass('investment')
});

test('Renders correct icon card', () => {
  const data = "Credit card Account";
  const {container} = render(<IconMatcher data={data} />)
  expect(container.firstChild).toHaveClass('card');
});

test('Renders correct icon loan', () => {
  const data = "Home loan account";
  const {container} = render(<IconMatcher data={data} />)
  expect(container.firstChild).toHaveClass('loan');
});

test('Renders correct icon money', () => {
  const data = "";
  const {container} = render(<IconMatcher data={data} />)
  expect(container.firstChild).toHaveClass('money');
})

