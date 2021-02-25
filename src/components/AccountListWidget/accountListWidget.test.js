import { render } from '@testing-library/react';
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
}

it('Renders wrapper div', () => {
  const {container} = render(<AccountListWidget data={data} />)
  expect(container.firstChild).toHaveClass('account-list-widget-wrapper')
})

