import styles from "./Footer.module.scss"

import FooterAbout from "./FooterAbout/FooterAbout"
import FooterLinks from "./FooterLinks/FooterLinks"
import FooterDownload from "./FooterDownload/FooterDownload"

import logo from "@public/logo.svg"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <div className={styles["footer__container"]}>
                <div className={styles["footer__logo"]}>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="logo"
                    />
                    <p>Платформа для просмотра театральных постановок онлайн</p>
                </div>
                <div className={styles["footer__links"]}>
                    <div className={styles["footer__column"]}>
                        <a href="#">О нас</a>
                        <a href="#">Контакты</a>
                        <a href="#">Партнерам</a>
                        <a href="#">Карьера НАсцене</a>
                        <a href="#">Акции</a>
                    </div>
                    <div className={styles["footer__column"]}>
                        <a href="#">Подарить сертификат</a>
                        <a href="#">Служба поддержки</a>
                        <a href="#">Где смотреть</a>
                        <a href="#">Вопросы и ответы</a>
                    </div>
                </div>
                <div className={styles["footer__payments"]}>
                    <p>Мы принимаем карты</p>
                    <div className={styles["footer__cards"]}>
                        <img src="path/to/mastercard.png" alt="Mastercard" />
                        <img src="path/to/visa.png" alt="Visa" />
                        <img src="path/to/mir.png" alt="Mir" />
                    </div>
                </div>
                <div className={styles["footer__apps"]}>
                    <img src="path/to/appstore.png" alt="App Store" />
                    <img src="path/to/googleplay.png" alt="Google Play" />
                    <img src="path/to/appgallery.png" alt="AppGallery" />
                </div>
                <div className={styles["footer__social"]}>
                    <a href="#"><img src="path/to/instagram.png" alt="Instagram" /></a>
                    <a href="#"><img src="path/to/telegram.png" alt="Telegram" /></a>
                    <a href="#"><img src="path/to/tiktok.png" alt="TikTok" /></a>
                    <a href="#"><img src="path/to/vk.png" alt="VK" /></a>
                </div>
            </div>
            <div className={styles["footer__bottom"]}>
                <p>© {currentYear} Все права защищены</p>
                <p>На сайте применяются рекомендательные технологии</p>
            </div>
        </footer>
    );
}

export default Footer;