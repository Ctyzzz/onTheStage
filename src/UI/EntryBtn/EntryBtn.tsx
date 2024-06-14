import { Link } from "react-router-dom";
import styles from "./EntryBtn.module.scss"

const EntryBtn = () => {
    return(
        <Link to="/auth">
            <button className={styles.entryBtn}>
                Вход
            </button>
        </Link>
    )
}

export default EntryBtn;