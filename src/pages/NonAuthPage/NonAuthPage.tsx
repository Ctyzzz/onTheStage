import styles from "./NonAuthPage.module.scss"

import logo from "../../../public/logo.svg"

import EntryBtn from "@src/UI/EntryBtn/EntryBtn"
import RegBtn from "@src/UI/RegBtn/RegBtn"


const NonAuthPage = () => {
    return(
        <>
            <div className={styles.overView}>
                <div className={styles["overView__header"]}>
                    <img src={logo} alt="logo" width={159} height={63} />
                    <ul className={styles["overView__header__menu"]}>
                        <li>
                            О нас
                        </li>
                        <li>
                            Тарифы
                        </li>
                        <li>
                            Популярное
                        </li>
                    </ul>
                    <div className={styles["overView__header__buttons"]}>
                        <EntryBtn></EntryBtn>
                        <RegBtn></RegBtn>
                    </div>
                </div>
            </div>
            <div className={styles.onlyOne}>

            </div>
            <div className={styles.subscription}>

            </div>
            <div className={styles.popular}>

            </div>
            <div className={styles.footer}>
                
            </div>
        </>
    )
}

export default NonAuthPage;
