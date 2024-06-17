import styles from "./Musical.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Space from "@public/space.png"
import Forest from "@public/forest.png"
import Revizor from "@public/revizor.png"
import Number13 from "@public/number13.png"
import Proud from "@public/proud.png"
import Cabaret from "@public/cabaret.png"
import Dumb from "@public/dumb.png"

import SpaceHover from "@public/spacehover.png"
import ForestHover from "@public/foresthover.png"
import RevizorHover from "@public/revizorhover.png"
import Number13Hover from "@public/number13hover.png"
import ProudHover from "@public/proudhover.png"
import CabaretHover from "@public/cabarethover.png"
import DumbHover from "@public/dumbhover.png"

const Musical = () => {
    return(
        <div className={styles.musical}>
            <p>Мюзиклы</p>
            <div className={styles["musical__cards"]}>
                <RateCard pic={Space} hoverPic={SpaceHover}/>
                <RateCard pic={Forest}  hoverPic={ForestHover}/>
                <RateCard pic={Revizor} hoverPic={RevizorHover}/>
                <RateCard pic={Number13} hoverPic={Number13Hover}/>
                <RateCard pic={Proud} hoverPic={ProudHover}/>
                <RateCard pic={Cabaret} hoverPic={CabaretHover}/>
                <RateCard pic={Dumb} hoverPic={DumbHover}/>
            </div>
        </div>
    )
}

export default Musical;