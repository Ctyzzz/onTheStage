import styles from "./New.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Proud from "@public/proud.png"
import Cabaret from "@public/cabaret.png"
import Lake from "@public/lake.png"
import Friderman from "@public/friderman.png"
import WomanDog from "@public/womandog.png"
import MakeUp from "@public/makeup.png"
import Son from "@public/son.png"

const New = () => {
    return(
        <div className={styles.new}>
            <p>Новинки на платформе</p>
            <div className={styles["new__cards"]}>
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
                <RateCard pic={Proud}/>
                <RateCard pic={Cabaret}/>
                <RateCard pic={Lake}/>
                <RateCard pic={Friderman}/>
                <RateCard pic={WomanDog}/>
                <RateCard pic={MakeUp}/>
                <RateCard pic={Son}/>
            </div>
        </div>
    )
}

export default New;