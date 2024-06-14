import styles from "./GridProp.module.scss"

const GridProp = ({ icon, title, about, w, h}) => {
    return(
        <div className={styles.gridProp}>
            <img src={icon} alt="icon" width={w} height={h}></img>
            <p className={styles["gridProp__titles"]} dangerouslySetInnerHTML={{ __html: title }}></p>
            <p className={styles["gridProp__abouts"]} dangerouslySetInnerHTML={{ __html: about }}></p>
        </div>
    )
}

export default GridProp;