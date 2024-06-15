import styles from "./RateCard.module.scss"

const RateCard = ({rating, agerate, background, pic}) => {
    return(
        <div className={styles.ratecard}>
            {/* <div className={styles["ratecard__specrating"]}>
                <p>{rating}</p>
            </div>
            <div className={styles["ratecard__agerating"]}>
                <p>{agerate}</p>
            </div> */}
            {/* style={{backgroundImage: `url(${background})`}} */}
            <img src={pic} alt="cardpic"/>
        </div>
    )
}

export default RateCard;