import React, { useState } from 'react';
import styles from '../AuthForm/AuthForm.module.scss';

interface AuthFormProps {
  onSubmit: (phoneNumber: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(phoneNumber, password);
  };

  return (
    <form className={styles.authform} onSubmit={handleSubmit}>
      <div className={styles.authform__input}>
        <input
          type="number"
          className={styles.authform__input__inputfield}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Номер телефона"
        />
      </div>
      <div className={styles.authform__input}>
        <input
          type={showPassword ? "text" : "password"}
          className={styles.authform__input__inputfield}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
        <span className={`${styles.authform__input__eye} ${showPassword ? 'show' : ''}`} onClick={() => setShowPassword(!showPassword)}></span>
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default AuthForm;