import React, { useRef, useEffect} from "react";

import styles from "./Special.module.scss"

import BigCardNo from "@ui/BigCardNo/BigCardNo";

import Mother from "@public/motherback.png"
import WOLF from "@public/W_O_L_F_back.png"
import Sinners from "@public/sinnersback.png"
import ThreeYears from "@public/threeyearsback.png"

const Special = () => {
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
        <div className={styles.special}>
            <p className={styles["special__title"]}>Специально для платформы</p>
            <div className={styles["special__cards"]} ref={cardsRef}>
                <BigCardNo title={"МАМА"} about={"Для тех, кто скучает по семье"} background={Mother}/>
                <BigCardNo title={"В.О.Л.К"} about={"Для тех, кто не верит в любовь"} background={WOLF}/>
                <BigCardNo title={"ГРЕШНИКИ"} about={"Для тех, кто ищет ответы"} background={Sinners}/>
                <BigCardNo title={"ТРИ ГОДА"} about={"Для тех, кто давно не смеялся"} background={ThreeYears}/>
            </div>
        </div>
    )
}

export default Special;