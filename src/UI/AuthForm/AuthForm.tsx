import React, { useState, useEffect } from 'react';    
import { useDispatch, useSelector } from 'react-redux';    
import { AppDispatch, RootState } from '../../redux/store';  
import { loginUser } from '../../redux/features/auth/authSlice';    
import styles from '../AuthForm/AuthForm.module.scss';    
import { useNavigate } from 'react-router-dom'; 
  
const AuthForm: React.FC = () => {    
  const [phoneNumber, setPhoneNumber] = useState('');    
  const [password, setPassword] = useState('');    
  const [showPassword, setShowPassword] = useState(false);    
  
  const dispatch: AppDispatch = useDispatch();  
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth); 
  const navigate = useNavigate(); 
   
  useEffect(() => { 
    if (isAuthenticated) { 
      navigate('/'); 
    } 
  }, [isAuthenticated, navigate]); 

  useEffect(() => {
    if (error) {
      console.error('Login error:', error);
    }
  }, [error]);
  
  const handleSubmit = (e: React.FormEvent) => {    
    e.preventDefault();    
    dispatch(loginUser({ phone: phoneNumber, password }));    
  };    
  
  return (    
    <form onSubmit={handleSubmit} className={styles.authform}>    
      <div className={`${styles.authform__input} ${error ? styles.error : ''}`}>    
        <input    
          type="number"    
          className={styles.authform__input__inputfield}    
          value={phoneNumber}    
          onChange={(e) => setPhoneNumber(e.target.value)}    
          placeholder="Номер телефона"    
        />    
      </div>    
      <div className={`${styles.authform__input} ${error ? styles.error : ''}`}>    
        <input    
          type={showPassword ? "text" : "password"}    
          className={styles.authform__input__inputfield}    
          value={password}    
          onChange={(e) => setPassword(e.target.value)}    
          placeholder="Введите пароль"    
        />    
        <span className={`${styles.authform__input__eye} ${showPassword ? 'show' : ''}`} onClick={() => setShowPassword(!showPassword)}></span>    
      </div>    
      <button type="submit" disabled={loading}>    
        Войти    
      </button>    
      {error && <p>{error}</p>}  
    </form>    
  );    
};    
  
export default AuthForm;