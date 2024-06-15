import styles from "./Header.module.scss"

import logo from "@public/logo.svg"
import lupa from "@public/lupa.svg"
import screenshare from "@public/screenshare.svg"
import acclogo from "@public/acclogo.svg"
import galka from "@public/galka.svg"

const Header = () => {
    return(
        <header className={styles.header}>
            <img src={logo} alt="logo"/>
            <div className={styles["header__variables"]}>
                <ul>
                    КАТАЛОГ
                    {/* <img src={galka} alt=""/> */}
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>ЗАСЦЕНОЙ</p>
                <p>ПОДБОРКИ</p>
                <img src={lupa} alt="search"/>
            </div>
            <div className={styles["header__acc"]}>
                <img src={screenshare} alt="tv"/>
                <img src={acclogo} alt="acc"/>
            </div>
        </header>
    )
}

export default Header;