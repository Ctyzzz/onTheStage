import React from 'react';  
import { Link } from 'react-router-dom';  
import { useDispatch, useSelector } from 'react-redux';  
import { useNavigate } from 'react-router-dom';  
import { RootState, AppDispatch } from '../../redux/store';  
import { login } from '../../redux/authSlice';  
import styles from './Login.module.scss';  
import back from '@public/backgroundreg.svg';  
import AuthForm from '@ui/AuthForm/AuthForm';  
import ButtonIntegration from '@ui/ButtonsIntegration/ButtonIntegration';  

const Login = () => {  
  const dispatch = useDispatch<AppDispatch>();  
  const navigate = useNavigate();  
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);  

  const handleLogin = async (phoneNumber: string, password: string) => {  
    await dispatch(login({ phoneNumber, password }));  
    if (isAuthenticated) {  
      navigate('/');  
    }  
  };  

  return (  
    <div className={styles.login}>  
      <div className={styles.login__back}>  
        <img src={back} alt="back" />  
      </div>  
      <div className={styles.login__form}>  
        <h1>Вход в аккаунт</h1>  
        <ButtonIntegration />  
        <div className={styles.login__form__or}>  
          <div className={styles.line}></div>  
          <p>или</p>  
          <div className={styles.line}></div>  
        </div>  
        <AuthForm onSubmit={handleLogin} />  
        {loading && <p>Loading...</p>}  
        {error && <p>{error}</p>}  
        <div className={styles.login__form__reg}>  
          <p>У вас нет аккаунта?  
            <Link to="/registration" style={{ textDecoration: 'none' }}><span>Зарегистрироваться</span></Link>  
          </p>  
          <span>Забыли пароль?</span>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Login;
