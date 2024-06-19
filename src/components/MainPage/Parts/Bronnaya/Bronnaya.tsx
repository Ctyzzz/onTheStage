import React, { useRef, useEffect } from "react";

import styles from "./Bronnaya.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Space from "@public/space.png"
import Forest from "@public/forest.png"
import Revizor from "@public/revizor.png"
import Number13 from "@public/number13.png"
import Proud from "@public/proud.png"
import Rabbits from "@public/rabbits.png"
import Faust from "@public/faust.png"

import SpaceHover from "@public/spacehover.png"
import ForestHover from "@public/foresthover.png"
import RevizorHover from "@public/revizorhover.png"
import Number13Hover from "@public/number13hover.png"
import ProudHover from "@public/proudhover.png"
import RabbitsHover from "@public/tworabbitshover.png"
import FaustHover from "@public/fausthover.png"

const Bronnaya = () => {
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
        <div className={styles.bronnaya}>
            <p>Спектакли вашего любимого театра «Малая Бронная»</p>
            <div className={styles["bronnaya__cards"]} ref={cardsRef}>
                <RateCard pic={Space} hoverPic={SpaceHover}/>
                <RateCard pic={Forest} hoverPic={ForestHover}/>
                <RateCard pic={Revizor} hoverPic={RevizorHover}/>
                <RateCard pic={Number13} hoverPic={Number13Hover}/>
                <RateCard pic={Proud} hoverPic={ProudHover}/>
                <RateCard pic={Rabbits} hoverPic={RabbitsHover}/>
                <RateCard pic={Faust} hoverPic={FaustHover}/>
            </div>
        </div>
    )
}

export default Bronnaya;