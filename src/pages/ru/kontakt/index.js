import React from "react";

import styles from "./style.module.css"

const RuKontakt = () => {
    return (
        <div className={styles.KontaktContainer}>
            <h2>Свяжитесь с нами!</h2>
            <p>Тел. +372 5056977</p>
            <p><a href="mailto:brainbox.ou@gmail.com">brainbox.ou@gmail.com</a></p>
            <p>Часы работы:</p>
            <p><b>Пн–Пт 8:30 -17:00</b></p>

            <p>Brainbox OÜ<br/>
                Регистрационный номер 14806853<br/>
                Номер расчетного счета в LHV EE477700771004035876</p>

        </div>
    );
};

export default RuKontakt;