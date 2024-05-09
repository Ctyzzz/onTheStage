import styles from "./OverView.module.scss"

import logo from "../../../../../public/logo.svg"
import show from "../../../../../public/show.png"
import appletv from "../../../../../public/appletv.svg"
import androidtv from "../../../../../public/androidtv.svg"
import samsung from "../../../../../public/samsung.svg"
import yandex from "../../../../../public/Yandex.svg"
import sony from "../../../../../public/sony.svg"

import EntryBtn from "@ui/EntryBtn/EntryBtn"
import RegBtn from "@ui/RegBtn/RegBtn"


const OverView = () => {
    return(
        <div className={styles.overView}>
            <div className={styles["overView__header"]}>
                <img src={logo} alt="logo" width={159} height={63} />
                <ul className={styles["overView__header__menu"]}>
                    <li>О нас</li>
                    <li>Тарифы</li>
                    <li>Популярное</li>
                </ul>
                <div className={styles["overView__header__buttonent"]}>
                    <EntryBtn></EntryBtn>
                </div>
                <div className={styles["overView__header__buttonreg"]}>
                    <RegBtn></RegBtn>
                </div>
            </div>
            <div className={styles["overView__wrap"]}>
                <div className={styles["overView__wrap__welcome"]}>
                    <h1>Спектакли со всего мира<br/> у тебя дома</h1>
                    <p>Платформа, которая позволяет окунуться в мир<br/>
                    театра, попасть на премьеру и заглянуть за кулисы</p>
                    <div className={styles["overView__wrap__welcome__buttons"]}>
                        <RegBtn></RegBtn>
                        <button className={styles.logBtn}>
                            Войти
                        </button>
                    </div>
                </div>
                <div className={styles["overView__wrap__image"]}>
                    <img src={show} alt="show" />
                </div>
            </div>
            <div className={styles["overView__sponsors"]}>
                <img src={appletv} alt="appletv"></img>
                <img src={androidtv} alt="appletv"></img>
                <img src={samsung} alt="appletv"></img>
                <img src={yandex} alt="appletv"></img>
                <img src={sony} alt="appletv"></img>
            </div>
        </div>
    )
}

export default OverView;