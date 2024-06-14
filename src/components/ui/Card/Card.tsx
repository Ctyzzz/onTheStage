import styles from "./Card.module.scss"

const Card = ({ picture }: { picture: string }) => {
    return (
        <div className={styles.card}>
            <div className={styles["card__element"]}>
                <img src={picture} alt="card" />
            </div>
        </div>
    );
}

export default Card;