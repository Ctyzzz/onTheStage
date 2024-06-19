import React, { useState, useEffect } from 'react'; 
import { useForm, SubmitHandler } from 'react-hook-form'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { loginUser } from '../../redux/features/auth/authSlice'; 
import { useNavigate } from 'react-router-dom'; 
import { RootState, AppDispatch } from '@redux/store'; 

import styles from '../AuthForm/AuthForm.module.scss'; 

interface IFormInput { 
  phoneNumber: string; 
  password: string; 
} 

const AuthForm: React.FC = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>(); 
  const dispatch: AppDispatch = useDispatch(); 
  const [showPassword, setShowPassword] = useState(false); 
  const status = useSelector((state: RootState) => state.authReducer.accessToken.status); 
  const [isSend, setIsSend] = useState(false); 
  const navigate = useNavigate(); 

  const onSubmit: SubmitHandler<IFormInput> = ({ phoneNumber, password }) => { 
    dispatch(loginUser({ phone: phoneNumber, password })); 
    setIsSend(true); 
  }; 

  useEffect(() => { 
    if (isSend && status === 'succeeded') { 
      close()
      navigate('/')
    } else if (status === 'error') { 
      setIsSend(false); 
    }
  }, [status, isSend, navigate]); 

  return ( 
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authform}> 
      <div className={`${styles.authform__input} ${errors.phoneNumber ? styles.error : ''}`}> 
        <input 
          type="tel" 
          className={styles.authform__input__inputfield} 
          {...register('phoneNumber', { required: 'Номер телефона обязателен' })} 
          placeholder="Номер телефона" 
        /> 
        {errors.phoneNumber && <p className={styles.errorMessage}>{errors.phoneNumber.message}</p>} 
      </div> 
      <div className={`${styles.authform__input} ${errors.password ? styles.error : ''}`}> 
        <input 
          type={showPassword ? "text" : "password"} 
          className={styles.authform__input__inputfield} 
          {...register('password', { required: 'Пароль обязателен' })} 
          placeholder="Введите пароль" 
        /> 
        <span 
          className={`${styles.authform__input__eye} ${showPassword ? 'show' : ''}`} 
          onClick={() => setShowPassword(!showPassword)} 
        ></span> 
        {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>} 
      </div> 
      <button type="submit">Войти</button> 
    </form> 
  ); 
}; 

export default AuthForm;
