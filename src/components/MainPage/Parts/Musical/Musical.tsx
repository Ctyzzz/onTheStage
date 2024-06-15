import styles from "./Musical.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Space from "@public/space.png"
import Forest from "@public/forest.png"
import Revizor from "@public/revizor.png"
import Number13 from "@public/number13.png"
import Proud from "@public/proud.png"
import Cabaret from "@public/cabaret.png"
import Dumb from "@public/dumb.png"

const Musical = () => {
    return(
        <div className={styles.musical}>
            <p>Мюзиклы</p>
            <div className={styles["musical__cards"]}>
                {/* <RateCard rating={"8.9"} agerate={"18+"} background={}/>
                <RateCard rating={"6.5"} agerate={"18+"} background={}/>
                <RateCard rating={"9.5"} agerate={"18+"} background={}/>
                <RateCard rating={"6.9"} agerate={"18+"} background={}/>
                <RateCard rating={"7.5"} agerate={"18+"} background={}/>
                <RateCard rating={"9.5"} agerate={"18+"} background={}/>
                <RateCard rating={"6.7"} agerate={"18+"} background={}/>
                <RateCard rating={"9.2"} agerate={"18+"} background={}/>
                <RateCard rating={"8.7"} agerate={"18+"} background={}/>
                <RateCard rating={"8.5"} agerate={"18+"} background={}/>
                <RateCard rating={"6.5"} agerate={"18+"} background={}/>
                <RateCard rating={"8.3"} agerate={"14+"} background={}/>
                <RateCard rating={"7.5"} agerate={"16+"} background={}/>
                <RateCard rating={"6.8"} agerate={"6+"} background={}/>
                <RateCard rating={"6.8"} agerate={"6+"} background={}/>
                <RateCard rating={"8.2"} agerate={"6+"} background={}/>
                <RateCard rating={"6.2"} agerate={"18+"} background={}/>
                <RateCard rating={"9.5"} agerate={"6+"} background={}/>
                <RateCard rating={"9.3"} agerate={"18+"} background={}/>
                <RateCard rating={"8.2"} agerate={"18+"} background={}/>
                <RateCard rating={"9.1"} agerate={"18+"} background={}/>
                <RateCard rating={"7.8"} agerate={"18+"} background={}/>
                <RateCard rating={"6.9"} agerate={"18+"} background={}/>
                <RateCard rating={"9.4"} agerate={"18+"} background={}/>
                <RateCard rating={"9.1"} agerate={"18+"} background={}/>
                <RateCard rating={"8.2"} agerate={"18+"} background={}/> */}
                <RateCard pic={Space}/>
                <RateCard pic={Forest}/>
                <RateCard pic={Revizor}/>
                <RateCard pic={Number13}/>
                <RateCard pic={Proud}/>
                <RateCard pic={Cabaret}/>
                <RateCard pic={Dumb}/>
            </div>
        </div>
    )
}

export default Musical;