import styles from './ButtonIntegration.module.scss'
import google from '@public/google.svg'
import facebook from '@public/facebook.svg'

const ButtonIntegration = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons__button}>
        <img src={google} alt="google" />
        <p>Войти через Google</p>
      </div>
      <div className={styles.buttons__button}>
        <img src={facebook} alt="facebook" />
        <p>Войти через Facebook</p>
      </div>
    </div>
  )
}

export default ButtonIntegration;