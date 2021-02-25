import React, { useState } from "react";
import './styles.scss';
import arrow from '../../assets/down-arrow.png';
import IconMatcher from '../IconMatcher/IconMatcher';

const AccountListWidget = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="widget-wrapper" key={data.accountNumber} onClick={handleClick}>
      <section className="widget-mininfo">
        <IconMatcher data={data.accountName}/>
        <section>
          <h2 className="widget-info">{data.accountName}</h2>
          <h2 className="widget-info">{data.accountNumber}</h2>
        </section>
        <span className="widget-balance">{data.balance.currencyIsoCode}{' '}{data.balance.value}</span>
        <img className={`widget-arrow arrow-${toggle}`} src={arrow} alt="dropdown arrow"></img>
      </section >
      {
        toggle &&
        <section className="widget-addinfo">
          <div className="widget-addinfo-row">
            <h2 className="widget-addinfo-title">Account Owner</h2>
            <h2 className="widget-addinfo-data">{data.owner}</h2>
          </div>
          <div className="widget-addinfo-rowodd">
            <h2 className="widget-addinfo-title">IBAN</h2>
            <h2 className="widget-addinfo-data">{data.iban}</h2>
          </div>
        </section>
      }
    </div >
  )
};

export default AccountListWidget;
