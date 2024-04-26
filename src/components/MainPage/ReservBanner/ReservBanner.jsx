import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow.svg";
import Button from "../../../UI/Button/Button";
import { Image } from "../../../UI/Image";
import backgroundBanner from "../../../assets/backgroundBanner.png";
import styles from "./ReservBanner.module.scss";

export const ReservBanner = () => {
  return (
    <div className={styles.reservBanner}>
      <Image
        className={styles.background}
        src={backgroundBanner}
        alt={"background"}
      />
      <div className={styles.reservBanner__content}>
        <h2>
          Нажми кнопку и забронируй место в игровом зале
        </h2>
        <div className={styles.button}>
          <Link to='/booking'>
            <Button>
              <Image src={arrow} alt="arrow" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
