import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';
import back from '@public/backgroundreg.svg';
import ButtonIntegration from '@ui/ButtonsIntegration/ButtonIntegration';
import RegForm from '@ui/RegForm/RegForm';

const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.registration__back}>
        <img src={back} alt="back" />
      </div>
      <div className={styles.registration__form}>
        <h1>Регистрация аккаунта</h1>
        <ButtonIntegration/>
        <div className={styles.registration__form__or}>
          <div className={styles.line}></div>
          <p>или</p>
          <div className={styles.line}></div>
        </div>
        <RegForm/>
        <div className={styles.registration__form__auth}>
          <p>У вас уже есть аккаунт? 
            <Link to="/auth" style={{ textDecoration: 'none' }}><span> Войти</span></Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Registration;