import React from "react"

import styles from "./BigCard.module.scss"

import play from "@public/play.svg"
import mark from "@public/mark.svg"

const BigCard = ({naming, year, theatre, duration, rate, about, background}) => {

    const renderTextWithLineBreaks = text => {
        return text.split('<br/>').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>);
    };

    return(
        <div className={styles.bigcard}  style={{backgroundImage: `url(${background})`, width: 1132, height: 628}} >
            <div className={styles["bigcard__content"]}>
                <h1>{naming}</h1>
                <div className={styles["bigcard__content__abouts"]}>
                    <p>{year}</p>
                    <p>{theatre}</p>
                    <p>{duration}</p>
                    <p>{rate}</p>
                </div>
                <p>{renderTextWithLineBreaks(about)}</p>
                <div className={styles["bigcard__content__buttons"]}>
                    <img src={play} alt="play"/>
                    <img src={mark} alt="mark"/>
                </div>
            </div>
        </div>
    )
}

export default BigCard;