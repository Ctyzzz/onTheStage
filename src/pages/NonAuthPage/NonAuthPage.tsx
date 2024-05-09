import styles from "./NonAuthPage.module.scss"

import OverView from "./Parts/OverView/OverView"
import OnlyOne from "./Parts/OnlyOne/OnlyOne"
import Subscription from "./Parts/Subscription/Subscription"
import Popular from "./Parts/Popular/Popular"
import Footer from "./Parts/Footer/Footer"


const NonAuthPage = () => {
    return(
        <>
            <OverView></OverView>
            <OnlyOne></OnlyOne>
            <Subscription></Subscription>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default NonAuthPage;
