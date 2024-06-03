import React from "react";
import styles from "../../ee/kontakt/style.module.css";

const EnKontakt = () => {
    return (
        <div className={styles.KontaktContainer}>
            <h2>Reach out to us!</h2>
            <p>Phone: +372 740 5112</p>
            <p>E-mail: <a href="mailto:brainbox.ou@gmail.com">brainbox.ou@gmail.com</a></p>
            <p>We are open:</p>
            <p><b>Mon – Fri 8.30 a.m –5.00 p.m</b></p>

            <p>Brainbox OÜ<br/>
                REG no. 14806853<br/>
                Account no. LHV EE477700771004035876</p>

        </div>
    );
};

export default EnKontakt;