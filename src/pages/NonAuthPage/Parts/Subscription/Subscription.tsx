import {Link} from "react-router-dom"

import styles from "./Subscription.module.scss"

import ico from "@public/check.svg"
import icorev from "@public/checkreverse.svg"

import TicketsWhite from "@ui/Tickets/White/TicketsWhite"
import TicketsBlue from "@ui/Tickets/Blue/TicketsBlue"

const Subscription = () => {
    return(
        <div className={styles.subscription}>
            <div className={styles["subscription__variations"]}>
                <h1>Варианты подписок</h1>
                <p>Подбери удобный для себя вариант</p>
            </div>
            <div className={styles["subscription__ticketss"]}>
                <TicketsWhite 
                naming={"тариф <br/> малый театр"}
                icon={ico} w={24} h={24}
                about1={"Более 1000 спектаклей <br/> по всему миру"}
                about2={"Доступ к интерактивным <br/> спектаклям"}
                about3={"Жизнь театров за кадром"}
                price={"750 руб/месяц"}>
                </TicketsWhite>
                <TicketsWhite
                naming={"тариф <br/> режиссер"}
                icon={ico} w={24} h={24}
                about1={"Возможность собрать <br/> подборку из 4 спектаклей"}
                about2={"Возможность заглянуть <br/> за кулисы"}
                about3={"Доступно скачивание"}
                price={"550 руб/месяц"}>
                </TicketsWhite>
                <TicketsBlue
                naming={"тариф <br/> большой театр"}
                icon={icorev} w={24} h={24}
                about1={"Более 1000 спектаклей <br/> по всему миру"}
                about2={"Доступ ко всем сервисам <br/> платформы"}
                about3={"Спектакли до премьеры"}
                price={"7950 руб/месяц"}>
                </TicketsBlue>
            </div>
        </div>
    )
}

export default Subscription;