import styles from "./Special.module.scss"

import BigCardNo from "@ui/BigCardNo/BigCardNo";

import Mother from "@public/motherback.png"
import WOLF from "@public/W_O_L_F_back.png"
import Sinners from "@public/sinnersback.png"
import ThreeYears from "@public/threeyearsback.png"

const Special = () => {
    return(
        <div className={styles.special}>
            <p className={styles["special__title"]}>Специально для платформы</p>
            <div className={styles["special__cards"]}>
                <BigCardNo title={"МАМА"} about={"Для тех, кто скучает по семье"} background={Mother}/>
                <BigCardNo title={"В.О.Л.К"} about={"Для тех, кто не верит в любовь"} background={WOLF}/>
                <BigCardNo title={"ГРЕШНИКИ"} about={"Для тех, кто ищет ответы"} background={Sinners}/>
                <BigCardNo title={"ТРИ ГОДА"} about={"Для тех, кто давно не смеялся"} background={ThreeYears}/>
            </div>
        </div>
    )
}

export default Special;