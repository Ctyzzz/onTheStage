import React from 'react';
import styles from './UnavailableModal.module.scss';

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.unavailableModal} onClick={onClose}>
            <div className={styles["unavailableModal__content"]} onClick={(e) => e.stopPropagation()}>
                <span className={styles["unavailableModal__content__title"]}>Упс, спектакль еще не вышел</span>
                <span className={styles["unavailableModal__content__description"]}>Подпишись на наш канал <br/> и первый узнай <br/> о возможности просмотра</span>
                <button onClick={onClose}>Подписаться</button>
            </div>
        </div>
    );
};

export default Modal;
