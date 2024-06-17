import styles from './Payment.module.scss'

import CardForm from './CardForm'

import back from '@public/backgroundreg.svg'
import mir from '@public/mir2.svg'
import mastercard from '@public/mastercard2.svg'
import visa from '@public/visa2.svg'
import verisign from '@public/verisign.svg'
import verified from '@public/verified.svg'
import qualus from '@public/qualys.svg'
import idcheck from '@public/idcheck.svg'

const Payment = () => {
  return (
    <div>
      <div className={styles.payment}>
        <div className={styles.payment__back}>
          <img src={back} alt="back" />
        </div>
        <div className={styles.payment__block}>
          <div className={styles.payment__block__header}>
            <h1>Оплата подписки</h1>
            <p>Введите данные своей карты</p>
            <div style = {{display: 'flex', gap: '38px'}}>
              <img src={visa} />
              <img src={mir} />
              <img src={mastercard} />
            </div>
            <CardForm />
            <div style = {{display: 'flex', gap: '31px', margin: '50px 0 0 0'}}>
              <img src={verisign} />
              <img src={verified} />
              <img src={qualus} />
              <img src={idcheck} />
            </div>
            <span>Мы гарантируем безопасность оплаты и платёжных данных <br />пользователей</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;