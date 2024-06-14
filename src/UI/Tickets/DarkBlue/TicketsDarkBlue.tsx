import React from "react";

import styles from "./TicketsDarkBlue.module.scss"


const TicketsDarkBlue = ({ naming, icon, about1, about2, about3, price, w, h }) => {

    const renderTextWithLineBreaks = text => {
        return text.split('<br/>').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>);
    };

    return(
        <div className={styles.ticket}>
            <div className={styles["ticket__title"]}>
                {naming}
            </div>
            <div className={styles["ticket__abouts"]}>
                <div className={styles["ticket__abouts__firstabout"]}>
                    <img src={icon} alt="icon" width={w} height={h}></img>
                    {about1}
                </div>
                <div className={styles["ticket__abouts__firstabout"]}>
                    <img src={icon} alt="icon" width={w} height={h}></img>
                    {about2}
                </div>
                <div className={styles["ticket__abouts__thirdabout"]}>
                    <img src={icon} alt="icon" width={w} height={h}></img>
                    {about3}
                </div>        
            </div>
            <div className={styles["ticket__pricing"]}>
                {price}
            </div>
        </div>
    )
}

export default TicketsDarkBlue;