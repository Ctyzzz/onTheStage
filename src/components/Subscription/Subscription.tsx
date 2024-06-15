import React from 'react';

import styles from './Subscription.module.scss';

import back from '@public/backgroundreg.svg';
import icorev from "@public/checkreverse.svg";

import TicketsDarkBlue from '@ui/Tickets/DarkBlue/TicketsDarkBlue';
import TicketsBlue from '@ui/Tickets/Blue/TicketsBlue';

const Subscription: React.FC = () => {
  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__left}>
        <img src={back} alt="Background" />
      </div>
      <div className={styles.subscription__block}>
        <div className={styles.subscription__block__header}>
          <h1>Подписка</h1>
          <p>Пропустить</p>
        </div>
        <p className={styles.subscription__block__text}>
          Подписка продлевается автоматически <br />и отменить можно в любой момент
        </p>
        <div className={styles.subscription__block__tickets}>
          <TicketsDarkBlue
            naming={"тариф <br/> эксперимент"}
            icon={icorev} w={24} h={24}
            about1={"Доступ к одному любому <br/>спектаклю"}
            about2={"Доступ к разделу <br/>Засценой о жизни театра <br/>и кино"}
            price={"350 руб"}
          />
          <TicketsDarkBlue
            naming={"тариф <br/> малый театр"}
            icon={icorev} w={24} h={24}
            about1={"Более 1000 спектаклей <br/> по всему миру"}
            about2={"Доступ к интерактивным <br/> спектаклям"}
            about3={"Жизнь театров за кадром"}
            price={"750 руб/месяц"}
          />
          <TicketsDarkBlue
            naming={"тариф <br/> режиссер"}
            icon={icorev} w={24} h={24}
            about1={"Возможность собрать <br/> подборку из 4 спектаклей"}
            about2={"Возможность заглянуть <br/> за кулисы"}
            about3={"Доступно скачивание"}
            price={"550 руб/месяц"}
          />
          <TicketsBlue
            naming={"тариф <br/> большой театр"}
            icon={icorev} w={24} h={24}
            about1={"Более 1000 спектаклей <br/> по всему миру"}
            about2={"Доступ ко всем сервисам <br/> платформы"}
            about3={"Спектакли до премьеры"}
            price={"7950 руб/месяц"}
          />
        </div>
      </div>
      <div className={styles.subscription__right}>
        <img src={back} alt="Background" />
      </div>
    </div>
  );
}

export default Subscription;
