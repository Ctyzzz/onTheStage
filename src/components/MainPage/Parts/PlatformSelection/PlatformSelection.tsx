import styles from "./PlatformSelection.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import MakeUp from "@public/makeup.png"
import Son from "@public/son.png"
import Dumb from "@public/dumb.png"
import Mayakovsky from "@public/mayakovsky.png"
import Forest from "@public/forest.png"
import Cabaret from "@public/cabaret.png"
import Number13 from "@public/number13.png"

const PlatformSelection = () => {
    return(
        <div className={styles.platformselection}>
            <p>Выбор платформы</p>
            <div className={styles["platformselection__cards"]}>
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
                <RateCard pic={MakeUp}/>
                <RateCard pic={Son}/>
                <RateCard pic={Dumb}/>
                <RateCard pic={Mayakovsky}/>
                <RateCard pic={Forest}/>
                <RateCard pic={Cabaret}/>
                <RateCard pic={Number13}/>
            </div>
        </div>
    )
}

export default PlatformSelection;