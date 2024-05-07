import styles from "./NonAuthPage.module.scss"
import logo from "@public/logo.svg"

const NonAuthPage = () => {
    return(
        <>
            <div className={styles.overView}>
                <div className={styles.header}>
                    <img src={logo} alt="logo" width={159} height={63} />
                </div>
            </div>
            <div className={styles.onlyOne}>

            </div>
            <div className={styles.subscription}>

            </div>
            <div className={styles.popular}>

            </div>
            <div className={styles.footer}>
                
            </div>
        </>
    )
}

export default NonAuthPage;
