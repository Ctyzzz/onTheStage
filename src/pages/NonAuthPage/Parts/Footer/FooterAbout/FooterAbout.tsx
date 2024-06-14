import styles from "./FooterAbout.module.scss"

import logo from "@public/logo.svg"

const FooterAbout = () => {
    return(
        <div className={styles.about}>
            <img
                className={styles.logo}
                src={logo}
                alt="logo"
            />
            <div className={styles["about__title"]}>
                Платформа для просмотра <br/>
                театральных постановок онлайн
            </div>
        </div>
    )
}

export default FooterAbout;