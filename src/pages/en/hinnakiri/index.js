import React from "react";

import styles from "./style.module.css"

const EnHinnakiri = () => {
    return (
        <div className={styles.HinnakiriContainer}>
            <h2>TRANSLATION PRICES</h2>
            <p>The prices of written translations are given per 1 word.</p>
            <p>The minimum volume of a translation is 125 words.</p>
            <p>The price of oral interpretation is given per one hour or 60 minutes.</p>
            <p>The price of layout/design is given per 1 A4 page.</p>
            <table>
                <tr>
                    <th>Languages</th>
                    <th>Price (€) VAT excl.</th>
                    <th>Price (€) VAT incl.</th>
                </tr>
                <tr>
                    <td>Estonian-Russian/English-Estonian</td>
                    <td>0.056</td>
                    <td>0.068</td>
                </tr>
                <tr>
                    <td>English-Russian-English</td>
                    <td>0.072</td>
                    <td>0,088</td>
                </tr>
                <tr>
                    <td>Machine translation post-editing</td>
                    <td>Ask for a price!</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Editing from</td>
                    <td>0.021</td>
                    <td>0.026</td>
                </tr>
                <tr>
                    <td>Proofreading from</td>
                    <td>0.016</td>
                    <td>0.020</td>
                </tr>
                <tr>
                    <td>Oral interpretation from</td>
                    <td>60.00/h</td>
                    <td>73.20/h</td>
                </tr>
                <tr>
                    <td>Layout/design from</td>
                    <td>4.00</td>
                    <td>4.88</td>
                </tr>
            </table>
        </div>
    );
};

export default EnHinnakiri;