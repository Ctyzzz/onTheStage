import ReactDOM from 'react-dom';

import styles from './Modal.module.scss'

const Modal = ({ show, onCloseButtonClick, children }) => {

  if (!show) {
    document.body.style.overflow = 'auto'
    return null;
  }
  if (show) {
    document.body.style.overflow = 'hidden'
  }

  document.body.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      onCloseButtonClick()
    }
  })

  document.body.addEventListener('click', (e) => {
    if (e.target.getAttribute("class") === "_modal-cover_1xp2m_15") {
      onCloseButtonClick()
    }
  })

  return ReactDOM.createPortal(
    <>
      <div className={styles['modal-cover']}></div>
      <div className={styles['modal-wrapper']} >
        {children}
      </div>
    </>, document.body
  );
}

export default Modal