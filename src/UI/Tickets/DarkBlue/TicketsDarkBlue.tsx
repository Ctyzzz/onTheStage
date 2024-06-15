import React from "react";

import styles from "./TicketsDarkBlue.module.scss";

interface TicketsDarkBlueProps {
    naming: string;
    icon: string;
    about1: string;
    about2: string;
    about3?: string;
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

const TicketsDarkBlue: React.FC<TicketsDarkBlueProps> = ({ naming, icon, about1, about2, about3, price, w, h }) => {
    return (
        <div className={styles.ticket}>
            <div className={styles["ticket__title"]}>
                {renderTextWithLineBreaks(naming)}
            </div>
            <div className={styles["ticket__abouts"]}>
                <div className={styles["ticket__abouts__firstabout"]}>
                    <img src={icon} alt="icon" width={w} height={h} />
                    {renderTextWithLineBreaks(about1)}
                </div>
                <div className={styles["ticket__abouts__firstabout"]}>
                    <img src={icon} alt="icon" width={w} height={h} />
                    {renderTextWithLineBreaks(about2)}
                </div>
                {about3 && (
                    <div className={styles["ticket__abouts__firstabout"]}>
                        <img src={icon} alt="icon" width={w} height={h} />
                        {renderTextWithLineBreaks(about3)}
                    </div>
                )}
            </div>
            <div className={styles["ticket__pricing"]}>
                {price}
            </div>
        </div>
    );
};

export default TicketsDarkBlue;
