import React from 'react';
import styles from './offer.module.scss';
import Button from '../button/button';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Purpose, makeInputString, makeInputNumber} from '../../../const';

const MINIMAL_LOAN_VALUE = 500000;
const MATERNAL_CAPITAL = 470000;
const MORTGAGE_BORDER = 15;
const CAR_BORDER = 2000000;
const MAX_PERCENT_FOR_INCOME = 45;
const MORTGAGE_RATE = {
  DEFAULT: 9.40,
  SMALL: 8.50,
};
const CAR_RATE = {
  DEFAULT: 16,
  SMALL: 15,
  CASCO_OR_INSURANCE: 8.5,
  CASCO_AND_INSURANCE: 3.5,
};

const getAmount = (price, payment, capital) => price - payment - (capital ? MATERNAL_CAPITAL : 0);
const getMortgageRate = (paymentRange) => paymentRange > MORTGAGE_BORDER ? MORTGAGE_RATE.SMALL : MORTGAGE_RATE.DEFAULT;
const getCarRate = (price, casco, insurance) => {
  if(casco && insurance) {
    return CAR_RATE.CASCO_AND_INSURANCE;
  }
  if(casco || insurance) {
    return CAR_RATE.CASCO_OR_INSURANCE;
  }
  if(price < CAR_BORDER) {
    return CAR_RATE.DEFAULT;
  }
  if(price >= CAR_BORDER) {
    return CAR_RATE.SMALL;
  }
};
const getMonthlyPayment = (sum, percent, time) => {
  const kp = time * 12;
  const ps = percent / 100 / 12;
  const ap = sum * (ps + (ps / ((1 + ps) ** kp - 1)));
  const result = ap.toFixed(0);
  return +result;
};
const getRequiredIncome = (payment) => +(payment * 100 / MAX_PERCENT_FOR_INCOME).toFixed(0);

function Offer({creditState, setBidState}) {
  const purpose = creditState.purpose;
  const priceValue = makeInputNumber(creditState.price);
  const paymentValue = makeInputNumber(creditState.payment);
  const timeValue = makeInputNumber(creditState.time);
  const percent = creditState.percent;
  const capital = creditState.capital;
  const casco = creditState.casco;
  const insurance = creditState.insurance;

  const mortgage = getAmount(priceValue, paymentValue, capital);
  const rate = purpose === Purpose.MORTGAGE ? getMortgageRate(percent) : getCarRate(priceValue, casco, insurance);
  const monthlyPayment = getMonthlyPayment(mortgage, rate, timeValue);
  const income = getRequiredIncome(monthlyPayment);

  return (
    <>
      {
        mortgage >= MINIMAL_LOAN_VALUE &&
        <div className={styles.offer}>
          <h3 className={styles.title}>Наше предложение</h3>
          <ul className={styles.list}>
            <li>
              <p className={styles.definition}>{makeInputString(mortgage)} рублей </p>
              <p className={styles.term}>Сумма {purpose === Purpose.MORTGAGE ? 'ипотеки' : 'автокредита'}</p>
            </li>
            <li>
              <p className={styles.definition}>{rate}%</p>
              <p className={styles.term}>Процентная ставка</p>
            </li>
            <li>
              <p className={styles.definition}>{makeInputString(monthlyPayment)} рублей</p>
              <p className={styles.term}>Ежемесячный платеж</p>
            </li>
            <li>
              <p className={styles.definition}>{makeInputString(income)} рублей</p>
              <p className={styles.term}>Необходимый доход</p>
            </li>
          </ul>
          <Button
            type='button'
            className={styles.button}
            onClick={() => setBidState(true)}
          >
            Оформить заявку
          </Button>
        </div>
      }
      {
        mortgage < MINIMAL_LOAN_VALUE &&
        <div className={styles.offer}>
          <p className={cn(styles.title, styles.error)}>
            Наш банк не выдает {purpose === Purpose.MORTGAGE ? 'ипотечные кредиты' : 'автокредиты'} меньше 200 000 рублей.
          </p>
          <p className={styles.term}>
            Попробуйте использовать другие параметры для расчета.
          </p>
        </div>
      }
    </>
  );
}

Offer.propTypes = {
  creditState: PropTypes.shape({
    purpose: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    capital: PropTypes.bool.isRequired,
    casco: PropTypes.bool.isRequired,
    insurance: PropTypes.bool.isRequired,
  }).isRequired,
  setBidState: PropTypes.func.isRequired,
};

export default Offer;
