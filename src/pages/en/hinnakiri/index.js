import React from "react";

import styles from "./style.module.css"

const EnHinnakiri = () => {
    return (
        <div className={styles.HinnakiriContainer}>
            <h2>TRANSLATION PRICES</h2>
            <p>The prices of written translations are given per 1 standard page of text.</p>
            <p>The European standard consists of 1800 symbols I.e., 30 lines of 60 characters each.</p>
            <p>The minimum volume of a translation is 125 words.</p>
            <p>The price of oral interpretation is given per one hour or 60 minutes.</p>
            <p>The price of layout/design is given per 1 A4 page.</p>
            <table>
                <tr>
                    <th>Languages</th>
                    <th>Price (€)</th>
                </tr>
                <tr>
                    <td>Estonian-Russian/English-Estonian</td>
                    <td>10.90</td>
                </tr>
                <tr>
                    <td>English-Russian-English</td>
                    <td>14.00</td>
                </tr>
                <tr>
                    <td>Machine translation post-editing</td>
                    <td>Ask for a price!</td>
                </tr>
                <tr>
                    <td>Editing from</td>
                    <td>4.50</td>
                </tr>
                <tr>
                    <td>Proofreading from</td>
                    <td>3.50</td>
                </tr>
                <tr>
                    <td>Oral interpretation from</td>
                    <td>60.00/h</td>
                </tr>
                <tr>
                    <td>Layout/design from</td>
                    <td>4.00</td>
                </tr>
            </table>
        </div>
    );
};

export default EnHinnakiri;