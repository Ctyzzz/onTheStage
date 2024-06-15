import styles from "./BigCardNo.module.scss"

const BigCardNo = ({title, about, background}) => {
    return(
        <div className={styles.bigcardno} style={{backgroundImage: `url(${background})`, width: 1062, height: 572}}>
            <div className={styles["bigcardno__content"]}>
                <h1>{title}</h1>
                <p>{about}</p>
            </div>
        </div>
    )
}

export default BigCardNo;