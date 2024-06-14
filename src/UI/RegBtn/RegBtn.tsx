import {Link} from "react-router-dom"
import styles from "./RegBtn.module.scss"

const RegBtn = () => {
    return(
        <Link to="/registration">
            <button className={styles.regBtn}>
                Регистрация
            </button>
        </Link>
    )
}

export default RegBtn;