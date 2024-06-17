import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { registerUser } from '../../redux/features/auth/registrationSlice';
import styles from './RegForm.module.scss';
import { useNavigate } from 'react-router-dom';

const RegForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch: AppDispatch = useDispatch();
  const { loading, error, isSuccess } = useSelector((state: RootState) => state.registration);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/category');
    }
  }, [isSuccess, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phoneNumber.length != 11) {
      setPhoneError('Номер телефона должен состоять из 11 цифр');
      return;
    } else {
      setPhoneError('');
    }

    if (password.length < 8) {
      setPasswordError('Пароль должен содержать минимум 8 символов');
      return;
    } else {
      setPasswordError('');
    }

    dispatch(registerUser({ name, phone: phoneNumber, password }));
  };

  useEffect(() => {
    if (error) {
      console.error('Registration error:', error);
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className={styles.regform}>
      <div className={`${styles.regform__input} ${error ? styles.error : ''}`}>
        <input
          type="text"
          className={styles.regform__input__inputfield}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
        />
      </div>
      <div className={`${styles.regform__input} ${phoneError ? styles.error : ''}`}>
        <input
          type="number"
          className={styles.regform__input__inputfield}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Ваш телефон"
        />
        {phoneError && <p className={styles.errorMessage}>{phoneError}</p>}
      </div>
      <div className={`${styles.regform__input} ${passwordError ? styles.error : ''}`}>
        <input
          type={showPassword ? "text" : "password"}
          className={styles.regform__input__inputfield}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Придумайте пароль"
        />
        <span className={`${styles.regform__input__eye} ${showPassword ? 'show' : ''}`} onClick={() => setShowPassword(!showPassword)}></span>
        {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
      </div>
      <button type="submit" disabled={loading}>
        Зарегистрироваться
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RegForm;