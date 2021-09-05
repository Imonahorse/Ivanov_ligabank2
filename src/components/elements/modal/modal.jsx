import React, {useEffect, useState} from 'react';
import styles from './modal.module.scss';
import logo from './logo-modal.svg';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from '../button/button';

ReactModal.setAppElement('#root');

const Inputs = {
  LOGIN: 'login',
  PASSWORD: 'password',
};

function Modal({handleModalClick, modalState}) {
  const storage = localStorage.getItem('form');
  const initialStorage = storage ? JSON.parse(storage) : {[Inputs.LOGIN]: '', [Inputs.PASSWORD]: ''};

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [form, setForm] = useState(initialStorage);

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(form));
  }, [form]);

  const handleSubmitClick = (evt) => {
    evt.preventDefault();

    localStorage.clear();
    handleModalClick();
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleAfterOpen = () => {
    document.body.classList.add(styles.open);
  };

  const handleAfterClose = () => {
    document.body.classList.remove(styles.open);
  };

  return (
    <ReactModal
      isOpen={modalState}
      contentLabel='Вход в аккаунт'
      overlayClassName={styles.modal}
      className={styles.inner}
      onRequestClose={handleModalClick}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      <section>
        <h2 className='visually-hidden'>
          Вход в аккаунт
        </h2>
        <div className={styles.header}>
          <img
            src={logo}
            alt='Логотип банка'
            width='151'
            height='31'
          />
          <button
            className={styles.close}
            aria-label='Кнопка закрыть'
            onClick={handleModalClick}
          >
          </button>
        </div>
        <form
          action='/#'
          method='post'
          className={styles.form}
          onSubmit={handleSubmitClick}
        >
          <label className={styles.label}>
            Логин
            <input
              type='text'
              className={styles.input}
              autoFocus
              name='login'
              value={form[Inputs.LOGIN]}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className={styles.label}>
            Пароль
            <input
              type={isVisiblePassword ? 'text' : 'password'}
              className={cn(styles.input)}
              name='password'
              value={form[Inputs.PASSWORD]}
              onChange={handleInputChange}
              required
            />
            <button
              aria-label='Сделать пароль видимым'
              type='button'
              className={styles.password_view}
              onMouseDown={() => setIsVisiblePassword(true)}
              onMouseUp={() => setIsVisiblePassword(false)}
              onMouseLeave={() => setIsVisiblePassword(false)}
            >
            </button>
          </label>
          <a
            href='/#'
            className={styles.forgot_password}
          >
            Забыли пароль?
          </a>
          <Button
            type='submit'
            className={styles.submit}
            aria-label='Кнопка отправить данные'
          >
            Войти
          </Button>
        </form>
      </section>
    </ReactModal>
  );
}

Modal.propTypes = {
  handleModalClick: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
};

export default Modal;
