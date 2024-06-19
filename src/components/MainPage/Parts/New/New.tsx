import React, {useRef, useEffect} from "react";

import styles from "./New.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Proud from "@public/proud.png"
import Cabaret from "@public/cabaret.png"
import Lake from "@public/lake.png"
import Friderman from "@public/friderman.png"
import WomanDog from "@public/womandog.png"
import MakeUp from "@public/makeup.png"
import Son from "@public/son.png"

import ProudHover from "@public/proudhover.png"
import CabaretHover from "@public/cabarethover.png"
import LakeHover from "@public/lakehover.png"
import FridermanHover from "@public/fridermanhover.png"
import WomanDogHover from "@public/womandoghover.png"
import MakeUpHover from "@public/makeuphover.png"
import SonHover from "@public/sonhover.png"

const New = () => {
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
        <div className={styles.new}>
            <p>Новинки на платформе</p>
            <div className={styles["new__cards"]} ref={cardsRef}>
                <RateCard pic={Proud} hoverPic={ProudHover}/>
                <RateCard pic={Cabaret} hoverPic={CabaretHover}/>
                <RateCard pic={Lake} hoverPic={LakeHover}/>
                <RateCard pic={Friderman} hoverPic={FridermanHover}/>
                <RateCard pic={WomanDog} hoverPic={WomanDogHover}/>
                <RateCard pic={MakeUp} hoverPic={MakeUpHover}/>
                <RateCard pic={Son} hoverPic={SonHover}/>
            </div>
        </div>
    )
}

export default New;