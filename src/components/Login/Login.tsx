import {Link} from 'react-router-dom'
import styles from './Login.module.scss'
import back from '@public/backgroundreg.svg'
import AuthForm from '@ui/AuthForm/AuthForm'

import ButtonIntegration from '@ui/ButtonsIntegration/ButtonIntegration'

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__back}>
        <img src={back} alt="back" />
      </div>
      <div className={styles.login__form}>
        <h1>Вход в аккаунт</h1>
        <ButtonIntegration/>
        <div className={styles.login__form__or}>
          <div className={styles.line}></div>
          <p>или</p>
          <div className={styles.line}></div>
        </div>
        <AuthForm/>
        <div className={styles.login__form__button}>
          <p>Войти</p>
        </div>
        <div className={styles.login__form__reg}>
          <p>У вас нет аккаунта? 
            <Link to = "/registration" style={{ textDecoration: 'none' }}><span>Зарегистрироваться</span></Link>
          </p>
          <span>Забыли пароль?</span>
        </div>
      </div>
    </div>
  )
}

export default Login;
