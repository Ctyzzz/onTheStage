import { useState } from 'react';

import Modal from "@components/UnavailableModal/UnavailableModal"

import styles from "./BigCardNo.module.scss"

const BigCardNo = ({title, about, background}) => {

    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return(
        <div className={styles.bigcardno} style={{backgroundImage: `url(${background})`}} onClick={handleCardClick}>
            <div className={styles.gradient}></div>
            <div className={styles["bigcardno__content"]}>
                <h1>{title}</h1>
                <p>{about}</p>
            </div>
            <Modal show={showModal} onClose={handleCloseModal} />
        </div>
    )
}

export default BigCardNo;