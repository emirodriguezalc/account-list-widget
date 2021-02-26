import React, { useState, useEffect } from 'react';
import './App.scss';
import AccountListWidget from './components/AccountListWidget/AccountListWidget';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const [accountList, setAccountList] = useState(null);

  useEffect(() => {
    fetch(`api/`)
      .then(res => res.json())
      .then(data => setAccountList(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
      <>
        {
          accountList && accountList.map((accountItem) => {
            return (
              <AccountListWidget data={accountItem} />
            );
          })
        }
        {
          !accountList && <Spinner />
        }
      </>
    </div>
  );
};

export default App;
