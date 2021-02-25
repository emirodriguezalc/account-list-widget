import React from "react";
import './styles.scss'

const AccountListWidget = ({ data }) => {
  return (
    <div className="account-list-widget-wrapper">
      <h1>icon</h1>
      <section>
        <h2>{data.accountName}</h2>
        <h2>{data.accountNumber}</h2>
      </section>
      <h2>{data.balance.value}</h2>
    </div>
  )
};

export default AccountListWidget;
