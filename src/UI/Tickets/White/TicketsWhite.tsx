import React from "react";

import styles from "./TicketsWhite.module.scss"

interface TicketsWhiteProps {
    naming: string;
    icon: string;
    about1: string;
    about2: string;
    about3: string;
    price: string;
    w: number;
    h: number;
}

const renderTextWithLineBreaks = (text: string) => {
    return text.split('<br/>').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
};

const TicketsWhite: React.FC<TicketsWhiteProps> = ({ naming, icon, about1, about2, about3, price, w, h }) => {

    return(

        <div className={styles.ticket}>
            <div className={styles["ticket__title"]}>
                {renderTextWithLineBreaks(naming)}
            </div>
            <div className={styles["ticket__abouts"]}>
                <div className={styles["ticket__abouts__firstabout"]}>
                    <img src={icon} alt="icon" width={w} height={h}></img>
                    {renderTextWithLineBreaks(about1)}
                </div>
                <div className={styles["ticket__abouts__firstabout"]}>
                    <img src={icon} alt="icon" width={w} height={h}></img>
                    {renderTextWithLineBreaks(about2)}
                </div>
                <div className={styles["ticket__abouts__firstabout"]}>
                    <img src={icon} alt="icon" width={w} height={h}></img>
                    {renderTextWithLineBreaks(about3)}
                </div>        
            </div>
            <div className={styles["ticket__pricing"]}>
                {price}
            </div>
        </div>
    )
}

export default TicketsWhite;