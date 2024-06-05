import styles from "./Card.module.scss"

const Card = ({ picture }) => {
    return(
        <div className={styles.card}>
            <div className={styles["card__element"]}>
                <img src={picture} alt="card"></img>
            </div>
        </div>
    )
}

export default Card;