import { render, screen } from '@testing-library/react';
import AccountListWidget from './AccountListWidget';
const data = {
  "balance": {
    "currencyIsoCode": "CHF",
    "value": 4227.69
  },
  "id": "32",
  "owner": "Eleonora Mühlemann",
  "accountNumber": "83188701",
  "accountName": "Investment Account",
  "iban": "CH870626852900227468",
};

test('Renders wrapper div', () => {
  const {container} = render(<AccountListWidget data={data} />)
  expect(container.firstChild).toHaveClass('widget-wrapper');
});

test('Renders correct icon', () => {
  const {container} = render(<AccountListWidget data={data} />)
   expect(container.firstChild.children[0].children[0]).toHaveClass('investment');
});

test('Renders correct data', () => {
   render(<AccountListWidget data={data} />)
   expect(screen.getByText('Investment Account')).toBeInTheDocument();
   expect(screen.getByText('83188701')).toBeInTheDocument();
   expect(screen.getByText('CHF 4227.69')).toBeInTheDocument();
  });

