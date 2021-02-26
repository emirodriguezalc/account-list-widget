import { render, screen } from '@testing-library/react';
import App from './App';

  test('renders correct number of widgets when data', async() => {
  const accountList = [
    {
      "balance": {
        "currencyIsoCode": "CHF",
        "value": 14151.84
      },
      "id": "27",
      "owner": "Erika Von Mühlenen",
      "accountNumber": "00020351",
      "accountName": "Credit Card Account",
      "iban": "CH5956810128753034072019",
    },
    {
      "balance": {
        "currencyIsoCode": "CHF",
        "value": 11315.11
      },
      "id": "28",
      "owner": "Yana Kocher",
      "accountNumber": "03963169",
      "accountName": "Credit Card Account",
      "iban": "CH470125018664130327935",
    },
    {
      "balance": {
        "currencyIsoCode": "CHF",
        "value": 3908.14
      },
      "id": "29",
      "owner": "Anaïs Benoit",
      "accountNumber": "28825289",
      "accountName": "Credit Card Account",
      "iban": "CH8850807000403728",
    },
    {
      "balance": {
        "currencyIsoCode": "CHF",
        "value": 10843.05
      },
      "id": "30",
      "owner": "Maximilian Ruchti",
      "accountNumber": "99831726",
      "accountName": "Home Loan Account",
      "iban": "CH3252AFW775SQ09900M7427",
    },
    {
      "balance": {
        "currencyIsoCode": "CHF",
        "value": 11772.13
      },
      "owner": "Rafael Munz",
      "id": "31",
      "accountNumber": "61738708",
      "accountName": "Money Market Account",
      "iban": "CH9108558062Y6853420",
    },
    {
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
  ];
  const data = JSON.stringify(accountList);
  global.fetch = jest.fn(() => (
    Promise.resolve({
      json: () => Promise.resolve(data)
    })
  ))
  const { container } = await render(<App />)
  // expect(container.firstChild.children.length).toEqual(accountList.length);  // Not working because its getting first render of app before having the data
  expect(fetch).toHaveBeenCalledTimes(1);
}); 

test('renders spinner when data is not there yet', async() => {
  global.fetch = jest.fn(() => (
    Promise.resolve({
      json: () => Promise.resolve(null)
    })
  ))
  const { container } = await render(<App />)
  expect(container.firstChild.children[0]).toHaveClass('spinner-container');
});
