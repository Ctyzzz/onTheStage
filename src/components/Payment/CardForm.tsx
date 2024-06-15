import React, { useState } from 'react';
import styles from './CardForm.module.scss';

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({
    cardNumber: false,
    expiryDate: false,
    cvv: false,
  });

  const validateForm = () => {
    const errors = {
      cardNumber: cardNumber.length !== 16,
      expiryDate: !/^(\d{2}\/\d{2})$/.test(expiryDate),
      cvv: cvv.length !== 3,
    };
    setErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
    }
  };

  return (
  <form className={styles.cardForm} onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Номер карты"
      value={cardNumber}
      maxLength={16}
      onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
      className={`${styles.input1} ${errors.cardNumber ? styles.error : ''}`}
    />
    <input
      type="text"
      placeholder="Срок действия"
      value={expiryDate}
      onChange={(e) => setExpiryDate(e.target.value.replace(/[^0-9/]/g, ''))}
      className={`${styles.input2} ${errors.expiryDate ? styles.error : ''}`}
    />
    <input
      type="password"
      placeholder="CVV"
      value={cvv}
      maxLength={3}
      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
      className={`${styles.input3} ${errors.cvv ? styles.error : ''}`}
    />
    <button type="submit">Оплатить</button>
  </form>
  );
};

export default CardForm;
