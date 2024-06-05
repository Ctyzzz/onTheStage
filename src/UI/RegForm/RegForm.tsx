import React, { useState } from 'react';
import styles from './RegForm.module.scss';

const RegForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
  <div className={styles.regform}>
    <div className={styles.regform__input}>
      <input
        type="text"
        className={styles.regform__input__inputfield}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше имя"
      />
    </div>
    <div className={styles.regform__input}>
      <input
        type="number"
        className={styles.regform__input__inputfield}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Ваш телефон"
      />
    </div>
    <div className={styles.regform__input}>
      <input
        type={showPassword ? "text" : "password"}
        className={styles.regform__input__inputfield}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Придумайте пароль"
      />
    <span className={`${styles.regform__input__eye} ${showPassword ? 'show' : ''}`} onClick={() => setShowPassword(!showPassword)}></span>
    </div>
  </div>
  );
};

export default RegForm;