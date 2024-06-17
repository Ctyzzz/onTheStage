import { useState } from 'react';
import styles from "./RateCard.module.scss";

const RateCard = ({ rating, agerate, background, pic, hoverPic }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.ratecard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
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
    </div>
  );
};

export default RateCard;
