import React, { useEffect, useState } from "react";
import card from '../../assets/credit-card.png';
import loan from '../../assets/loan.png';
import money from '../../assets/money.png';
import investment from '../../assets/profits.png';

const IconMatcher = ({ data }) => {
  const [icon, setIcon] = useState(money)

  useEffect(() => {
    if (data.search(/card/gi) !== -1) {
      setIcon(card)
    }

    if (data.search(/home/gi) !== -1) {
      setIcon(loan)
    }

    if (data.search(/investment/gi) !== -1) {
      setIcon(investment)
    }
  })

  return (<img className="widget-img" src={icon} alt="Money"></img>)
};

export default IconMatcher;
