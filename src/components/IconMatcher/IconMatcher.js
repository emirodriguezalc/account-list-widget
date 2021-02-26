import React, { useEffect, useState } from "react";
import card from '../../assets/credit-card.png';
import loan from '../../assets/loan.png';
import money from '../../assets/money.png';
import investment from '../../assets/profits.png';

const IconMatcher = ({ data }) => {
  const [icon, setIcon] = useState({})

  useEffect(() => {
    if (data.search(/card/gi) !== -1) {
      setIcon({ url: card, name: 'card' })
    }

    else if (data.search(/loan/gi) !== -1) {
      setIcon({ url: loan, name: 'loan' })
    }

    else if (data.search(/investment/gi) !== -1) {
      setIcon({ url: investment, name: 'investment' })
    }
    else {
      setIcon({ url: money, name: 'money' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (<img className={`widget-img ${icon.name}`} src={icon.url} alt={icon.name}></img>)
};

export default IconMatcher;
