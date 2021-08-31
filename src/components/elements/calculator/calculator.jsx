import React, {useEffect, useState} from 'react';
import styles from './calculator.module.scss';
import cn from 'classnames';

const addWhiteSpaces = (value) => {
  if (typeof (value) === 'number') {
    return value.toLocaleString();
  }
  if (typeof (value) === 'string') {
    return value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ').trim();
  }
};
const deleteWhiteSpacesAndLetters = (value) => value.replace(/\s/g, '').replace(/[a-zа-яё]/gi, '').trim();
const deleteLetters = (value) => value.replace(/[a-zа-яё]/gi, '').trim();


const NameSpace = {
  PROPERTY: 'property',
  CONTRIBUTION: 'contribution',
  TERM: 'term',
};

const initialState = {
  [NameSpace.PROPERTY]: '2 000 000 рублей',
  [NameSpace.CONTRIBUTION]: '200 000 рублей',
  [NameSpace.TERM]: '5 лет',
};

const Purpose = {
  HOME: 'home',
  AUTO: 'auto',
};

const Params = {
  [Purpose.HOME]: {
    title: 'Ипотечное кредитование',
    price: {
      value: '2 000 000 рублей',
      min: 1200000,
      max: 25000000,
      step: 100000,
    },
    payment: {
      percent: '10%',
      value: '200 000 рублей',
      min: '5%',
      max: '',
      step: '5%',
    },
    time: {
      value: '5 лет',
      min: 5,
      max: 30,
      step: 5,
    },
  },
  [Purpose.AUTO]: {
    title: 'Автомобильное кредитование',
    price: {
      value: '1 000 000 рублей',
      min: 500000,
      max: 5000000,
      step: 50000,
    },
    payment: {
      percent: '20%',
      value: '200 000 рублей',
      min: '20%',
      max: '',
      step: '5%',
    },
    time: {
      value: '1 год',
      min: 1,
      max: 5,
      step: 1,
    },
  },
};

function Calculator() {
  const [selectList, setSelectList] = useState(false);
  const [secondFieldView, setSecondFieldView] = useState(true);
  const [firthFieldView, setFirthFieldView] = useState(true);
  const [priceError, setPriceError] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [range, setRange] = useState(10);
  const [secondRange, setSecondRange] = useState(5);



  useEffect(() => {
    const ass = +deleteWhiteSpacesAndLetters(formState[NameSpace.PROPERTY]);
    const bss = ass * range / 100;
    setFormState((prev) => ({
      ...prev,
      [NameSpace.CONTRIBUTION]: `${addWhiteSpaces(bss)} рублей`,
    }));
  }, [range]);

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    const formatterValue = +deleteWhiteSpacesAndLetters(value);

    const test = formatterValue * range / 100;
    const testtest = deleteWhiteSpacesAndLetters(formState[NameSpace.CONTRIBUTION]) * 100  / deleteWhiteSpacesAndLetters(formState[NameSpace.PROPERTY]);

    setFormState((prev) => ({
      ...prev,
      [NameSpace.CONTRIBUTION]: (`${addWhiteSpaces(test)} рублей`),
    }));

    setFormState((prev) => ({
      ...prev,
      [name]: addWhiteSpaces(formatterValue).toString(),
    }));

    setRange(testtest);
  };

  const handleInputFocus = (evt) => {
    const {name} = evt.target;
    setFormState((prev) => ({
      ...prev,
      [name]: deleteLetters(prev[name]),
    }));
  };

  const handleInputBlur = (evt) => {
    const {name} = evt.target;
    setFormState((prev) => ({
      ...prev,
      [name]: `${prev[name]} рублей`,
    }));
  };

  const handleButtonClick = (evt) => {
    const {name} = evt.target;
    setFormState((prev) => {
      let oldTerm = +deleteWhiteSpacesAndLetters(prev[NameSpace.PROPERTY]);
      let newTerm;

      if (name === 'minus') {
        newTerm = oldTerm -= 100000;
      }
      if (name === 'plus') {
        newTerm = oldTerm += 100000;
      }

      return {
        ...prev,
        [NameSpace.PROPERTY]: `${addWhiteSpaces(newTerm)} рублей`,
      };
    });
  };

  return (
    <section className={styles.calculator}>
      <div className='container'>
        <h2 className={styles.title}>Кредитный калькулятор</h2>
        <form action='/#' method='post' className={styles.form}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Шаг 1. Цель кредита</legend>
            <ul className={cn(
              styles.dropdown,
              {[styles.dropdown__open]: selectList},
            )}
            >
              <li className={styles.dropdown__item}>
                <div
                  className={styles.dropdown__input}
                  onClick={() => {
                    setSelectList((prev) => !prev);
                  }}
                >
                  Выберите цель кредитования
                </div>
              </li>
              {
                selectList &&
                <>
                  <li className={styles.dropdown__item}>
                    <label
                      className={styles.dropdown__input}
                      onClick={() => {
                        setSelectList((prev) => !prev);
                        setSecondFieldView(true);
                      }}
                    >
                      <input type='radio' className='visually-hidden'/>
                      Ипотечное кредитование
                    </label>
                  </li>
                  <li className={styles.dropdown__item}>
                    <label
                      className={styles.dropdown__input}
                      onClick={() => {
                        setSelectList((prev) => !prev);
                        setSecondFieldView(true);
                      }}
                    >
                      <input type='radio' className='visually-hidden'/>
                      Автомобильное кредитование
                    </label>
                  </li>
                </>
              }
            </ul>
          </fieldset>
          {
            secondFieldView &&
            <>
              <fieldset className={styles.fieldset}>
                <legend className={cn(styles.legend, styles.legend__credit)}>Шаг 2. Введите параметры кредита</legend>
                <ul className={styles.credit}>
                  <li className={styles.credit__item}>
                    {priceError && <span className={styles.error}>Неправильное значение</span>}
                    <label className={styles.credit__label}>
                      Стоимость недвижимости
                      <input
                        className={styles.credit__input}
                        type='text'
                        value={formState[NameSpace.PROPERTY]}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        name={NameSpace.PROPERTY}
                      />
                    </label>
                    <button onClick={handleButtonClick} name='minus' type='button' className={cn(styles.control, styles.control__minus)}></button>
                    <button onClick={handleButtonClick} name='plus' type='button' className={cn(styles.control, styles.control__plus)}></button>
                    <p className={styles.credit__notice}>От 1 200 000 до 25 000 000 рублей</p>
                  </li>
                  <li className={styles.credit__item}>
                    <label className={styles.credit__label}>
                      Первоначальный взнос
                      <input
                        className={styles.credit__input}
                        type='text'
                        value={formState[NameSpace.CONTRIBUTION]}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        name={NameSpace.CONTRIBUTION}
                      />
                    </label>
                    <input
                      className={styles.range}
                      type='range'
                      min='10'
                      max='100'
                      step='5'
                      value={range}
                      onChange={(evt) => setRange(evt.target.value)}
                    />
                    <span>10%</span>
                  </li>
                  <li className={styles.credit__item}>
                    <label className={styles.credit__label}>
                      Срок кредитования
                      <input
                        className={styles.credit__input}
                        type='text'
                        name={NameSpace.TERM}
                        value={formState[NameSpace.TERM]}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange}
                      />
                    </label>
                    <input
                      className={styles.range}
                      type='range'
                      min='5'
                      max='30'
                      step='5'
                      value={secondRange}
                      onChange={(evt)=>setSecondRange(evt.target.value)}
                    />
                    <span>5 лет</span>
                  </li>
                  <li className={styles.credit__item}>
                    <label>
                      <input type='checkbox'/>
                      Использовать материнский капитал
                    </label>
                  </li>
                </ul>
              </fieldset>
              <div className={styles.offer}>
                <h3 className={styles.offer__title}>Наше предложение</h3>
                <ul className={styles.offer__list}>
                  <li>
                    <p className={styles.definition}>1 330 000 рублей </p>
                    <p className={styles.term}>Сумма ипотеки</p>
                  </li>
                  <li>
                    <p className={styles.definition}>9,40%</p>
                    <p className={styles.term}>Процентная ставка</p>
                  </li>
                  <li>
                    <p className={styles.definition}>27 868 рублей</p>
                    <p className={styles.term}>Ежемесячный платеж</p>
                  </li>
                  <li>
                    <p className={styles.definition}>61 929 рублей</p>
                    <p className={styles.term}>Необходимый доход</p>
                  </li>
                </ul>
                <button typy='button' className={styles.oformit}>Оформить заявку</button>
              </div>
            </>
          }
          {
            firthFieldView &&
            <div className={styles.final}>
              <h3 className={cn(styles.legend, styles.finall)}>Шаг 3. Оформление заявки</h3>
              <dl className={styles.dllist}>
                <div className={styles.dl}>
                  <dt className={styles.term}>Номер заявки</dt>
                  <dd className={styles.definition}>№ 0010</dd>
                </div>
                <div className={styles.dl}>
                  <dt className={styles.term}>Цель кредита</dt>
                  <dd className={styles.definition}>Ипотека</dd>
                </div>
                <div className={styles.dl}>
                  <dt className={styles.term}>Стоимость недвижимости</dt>
                  <dd className={styles.definition}>2 000 000 рублей</dd>
                </div>
                <div className={styles.dl}>
                  <dt className={styles.term}>Первоначальный взнос</dt>
                  <dd className={styles.definition}>200 000 рублей</dd>
                </div>
                <div className={styles.dl}>
                  <dt className={styles.term}>Срок кредитования</dt>
                  <dd className={styles.definition}>5 лет</dd>
                </div>
              </dl>
              <fieldset className={cn(styles.fieldset, styles.last)}>
                <legend className='visually-hidden'>Ваши данные</legend>
                <input className={styles.first} type="text"/>
                <input className={styles.first} type="text"/>
                <input className={styles.first} type="text"/>
              </fieldset>
              <button type='submit' className={styles.submit}>Отправить</button>
            </div>
          }
        </form>
      </div>
    </section>
  );
}

export default Calculator;

