import React, { useState } from 'react';
import styles from './RegForm.module.scss';

interface RegFormProps {
  onSubmit: (name: string, phoneNumber: string, password: string) => void;
}

const RegForm: React.FC<RegFormProps> = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, phoneNumber, password);
  };

  return (
    <form className={styles.regform} onSubmit={handleSubmit}>
      <div className={styles.regform__input}>
        <input
          type="text"
          className={styles.regform__input__inputfield}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя"
        />
      </div>
      <div className={styles.regform__input}>
        <input
          type="number"
          className={styles.regform__input__inputfield}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Номер телефона"
        />
      </div>
      <div className={styles.regform__input}>
        <input
          type={showPassword ? "text" : "password"}
          className={styles.regform__input__inputfield}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
        <span className={`${styles.regform__input__eye} ${showPassword ? 'show' : ''}`} onClick={() => setShowPassword(!showPassword)}></span>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegForm;