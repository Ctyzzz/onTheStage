import styles from "./Footer.module.scss"

import FooterAbout from "./FooterAbout/FooterAbout"
import FooterLinks from "./FooterLinks/FooterLinks"
import FooterDownload from "./FooterDownload/FooterDownload"

import logo from "@public/logo.svg"
import MasterCard from "@public/mastercardsmall.svg"
import VISA from "@public/visasmall.svg"
import MIR from "@public/mirsmall.svg"
import Instagram from "@public/instagram.svg"
import Telegram from "@public/telegram.svg"
import TikTok from "@public/tiktok.svg"
import VK from "@public/vk.svg"
import AppStore from "@public/appstore.png"
import GooglePlay from "@public/googleplay.png"
import AppGallery from "@public/appgallery.png"


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <div className={styles["footer__firstblock"]}>
                <div className={styles["footer__firstblock__logos"]}>
                    <img 
                    src={logo} alt="onthestage" 
                    width={160} height={64}
                    />
                    <p>Платформа для просмотра<br/>
                    театральных постановок онлайн
                    </p>
                </div>
                <div className={styles["footer__firstblock__copyright"]}>
                    <p>© {currentYear} Все права защищены.</p>
                </div>
            </div>
            <div className={styles["footer__secondblock"]}>
                <div  className={styles["footer__secondblock__abouts"]}>
                    <ul className={styles["footer__secondblock__abouts__ul"]}>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Партнерам</li>
                        <li>Карьера НАсцене</li>
                        <li>Акции</li>
                    </ul>
                </div>
                <p>Мы принимаем карты</p>
                <div className={styles["footer__secondblock__logos"]}>
                    <img src={MasterCard} alt="mastercard"/>
                    <img src={VISA} alt="visa"/>
                    <img src={MIR} alt="mir"/>
                </div>
            </div>
            <div className={styles["footer__thirdblock"]}>
                <div className={styles["footer__thirdblock__abouts2"]}>
                    <ul>
                        <li>Подарить сертификат</li>
                        <li>Служба поддержки</li>
                        <li>Где смотреть</li>
                        <li>Вопросы и ответы</li>
                    </ul>
                </div>
                <div className={styles["footer__thirdblock__logos"]}>
                    <img src={Instagram} alt="inst"/>
                    <img src={Telegram} alt="tg"/>
                    <img src={TikTok} alt="tiktok"/>
                    <img src={VK} alt="vk"/>
                </div>
            </div>
            <div className={styles["footer__fourthblock"]}>
                <div className={styles["footer__fourthblock__pics"]}>
                    <img 
                    className={styles["appstore"]}
                    src={AppStore} alt="appstore" 
                    width={180} height={52}
                    />
                    <img 
                    className={styles["googleplay"]}
                    src={GooglePlay} alt="googleplay" 
                    width={180} height={52}
                    />
                    <img 
                    className={styles["appgallery"]}
                    src={AppGallery} alt="appgallery" 
                    width={180} height={52}
                    /> 
                </div>
                <p>На сайте применяются рекомендательные <br/>
                технологии
                </p>
            </div>
        </footer>
    );
}

export default Footer;