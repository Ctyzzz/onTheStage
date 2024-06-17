import styles from "./Genre.module.scss"

const Genre = ({logo, text}) => {
    return(
        <div className={styles.genre}>
            <img src={logo} alt="logo"/>
            <p>{text}</p>
        </div>
    )
}

export default Genre;