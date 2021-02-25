import React, { useState, useEffect } from 'react';
import './App.css';
import AccountListWidget from './components/AccountListWidget/AccountListWidget';

const App = () => {
  const [accountList, setAccountList] = useState(null);

  useEffect(() => {
    fetch(`api/`)
      .then(res => res.json())
      .then(data => setAccountList(data))
      .catch(err => console.log(err));
  })
  return (
    <div className="App">
      <>
        {
          accountList && accountList.map((accountItem) => {
            return (
              <AccountListWidget data={accountItem} />
            );
          })
        };
        {
          !accountList && <h1>Spinner</h1>
        }
      </>
    </div>
  );
};

export default App;
