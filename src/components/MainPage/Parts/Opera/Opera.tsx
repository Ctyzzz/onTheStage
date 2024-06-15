import styles from "./Opera.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Triviata from "@public/triviata.png"
import Rigoletto from "@public/rigoletto.png"
import Aida from "@public/aida.png"
import Faust from "@public/faust.png"
import Karamazovi from "@public/karamazovi.png"
import Yearning from "@public/yearning.png"
import QueenOfSpades from "@public/queenofspades.png"

const Opera = () => {
    return(
        <div className={styles.opera}>
            <p>Опера</p>
            <div className={styles["opera__cards"]}>
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
                <RateCard pic={Triviata}/>
                <RateCard pic={Rigoletto}/>
                <RateCard pic={Aida}/>
                <RateCard pic={Faust}/>
                <RateCard pic={Karamazovi}/>
                <RateCard pic={Yearning}/>
                <RateCard pic={QueenOfSpades}/>
            </div>
        </div>
    )
}

export default Opera;