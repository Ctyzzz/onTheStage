import React, { useRef, useEffect } from "react";

import styles from "./PlatformSelection.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import MakeUp from "@public/makeup.png"
import Son from "@public/son.png"
import Dumb from "@public/dumb.png"
import Mayakovsky from "@public/mayakovsky.png"
import Forest from "@public/forest.png"
import Cabaret from "@public/cabaret.png"
import Number13 from "@public/number13.png"

import MakeUpHover from "@public/makeuphover.png"
import SonHover from "@public/sonhover.png"
import DumbHover from "@public/dumbhover.png"
import MayakovskyHover from "@public/mayakovskyhover.png"
import ForestHover from "@public/foresthover.png"
import CabaretHover from "@public/cabarethover.png"
import Number13Hover from "@public/number13hover.png"

const PlatformSelection = () => {
    const cardsRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent) => {
    if (cardsRef.current) {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    if (cards) {
      cards.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (cards) {
        cards.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

    return(
        <div className={styles.platformselection}>
            <p>Выбор платформы</p>
            <div className={styles["platformselection__cards"]} ref={cardsRef}>
                <RateCard pic={MakeUp} hoverPic={MakeUpHover}/>
                <RateCard pic={Son} hoverPic={SonHover}/>
                <RateCard pic={Dumb} hoverPic={DumbHover}/>
                <RateCard pic={Mayakovsky} hoverPic={MayakovskyHover}/>
                <RateCard pic={Forest} hoverPic={ForestHover}/>
                <RateCard pic={Cabaret} hoverPic={CabaretHover}/>
                <RateCard pic={Number13} hoverPic={Number13Hover}/>
            </div>
        </div>
    )
}

export default PlatformSelection;