import styles from "./Bronnaya.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Space from "@public/space.png"
import Forest from "@public/forest.png"
import Revizor from "@public/revizor.png"
import Number13 from "@public/number13.png"
import Proud from "@public/proud.png"
import Rabbits from "@public/rabbits.png"
import Faust from "@public/faust.png"

const Bronnaya = () => {
    return(
        <div className={styles.bronnaya}>
            <p>Спектакли вашего любимого театра «Малая Бронная»</p>
            <div className={styles["bronnaya__cards"]}>
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
                <RateCard pic={Rabbits}/>
                <RateCard pic={Faust}/>
            </div>
        </div>
    )
}

export default Bronnaya;