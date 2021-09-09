import {instanceOf} from 'prop-types';

const Purpose = {
  DEFAULT: 'default',
  MORTGAGE: 'Ипотека',
  CAR: 'Автокредит',
};

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}


const makeInputNumber = (value) => +value.replace(/[^0-9]/g, '').trim();

const makeInputString = (value, string = '') => {
  const newValue = typeof(value) === 'string' ? makeInputNumber(value).toString() : value.toString();
  const newString = string === '' ? string : declOfNum(newValue, string);

  return (`${newValue.replace(/(\d)(?=(\d{3})+$)/g, '$1 ').trim()} ${newString}`).trim();
};

export {Purpose, makeInputString, makeInputNumber};
