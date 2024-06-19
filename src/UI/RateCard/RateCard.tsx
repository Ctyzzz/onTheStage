import { useState } from 'react';

import Modal from "@components/UnavailableModal/UnavailableModal"

import styles from "./RateCard.module.scss";

const RateCard = ({ pic, hoverPic }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

  return (
    <div
      className={styles.ratecard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer} onClick={handleCardClick}>
        <img 
          src={pic} 
          alt="cardpic" 
          className={`${styles.cardpic} ${isHovered ? styles.hidden : ''}`}
        />
        <img 
          src={hoverPic} 
          alt="hovercardpic" 
          className={`${styles.cardpic} ${isHovered ? '' : styles.hidden}`}
        />
      </div>
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default RateCard;
