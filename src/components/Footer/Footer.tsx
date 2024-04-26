import moment from "moment";
import FooterLogo from "../../assets/footer/FooterLogo.svg";
import phone from "../../assets/footer/phone.svg";
import mail from "../../assets/footer/mail.svg";
import { Image } from "../../UI/Image/index.js";
import { footerLink, socialLinks } from "../../const.js";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { TelegramIcon } from "../../assets/footer/index";

export const Footer = () => {
  const CurrentDate = moment().format("YYYY");

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__content}>
          <div className={styles.footer__container__content__main}>
            <div className={styles.social}>
              <Link to = "/">
                <img src={FooterLogo} alt="Logo" />
              </Link>
              <div className={styles.social__block}>
                {socialLinks.map((obj, i) => (
                  <Link to={obj.href} key={i}>
                    <Image
                      className={styles.socialIcons}
                      key={obj.name}
                      src={obj.img}
                      alt={obj.name}
                    />
                  </Link>
                ))}
                <Link to="https://t.me/mirea_esports900">
                  <TelegramIcon Color={"#FF9900"}></TelegramIcon>
                </Link>
              </div>
            </div>
            <div className={styles.footerNav}>
              <ul>
                {footerLink.map((obj, i) => (
                  <Link to={obj.href} key={i}>
                    <li key={obj.id}> {obj.title} </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className={styles.contacts}>
              <div className={styles.phNumber}>
                <Image src={phone} alt="phone" />
                <a href="tel:+74992156565,6020">+7 (499) 215-65-65</a>
              </div>
              <div className={styles.eMail}>
                <Image src={mail} alt="mail" />
                <a href="mailto:esports@mirea.ru">esports@mirea.ru</a>
              </div>
              <div className={styles.address}>
                <address>г. Москва, проспект Вернадского 78, <br/> строение 7</address>
              </div>
            </div>
          </div>
          <div className={styles.footer__container__content__bottom}>
            <div className={styles.copyright}>
              © {CurrentDate} Киберспортивный центр
              РТУ МИРЭА. Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
