import React from "react";

import styles from "./style.module.css"

const EeHinnakiri = () => {
    return (
        <div className={styles.HinnakiriContainer}>
            <h2>TÕLKEBÜROO BRAINBOX HINNAKIRI</h2>
            <p>Põhikeelte tõlkimise hinnad leiate hinnakirjast, kuid tõlgime oluliselt rohkemaid keeli. Küsi
                hinnapakkumist, kui Teie poolt soovitud keelesuund pole toodud alljärgnevas hinnakirjas.</p>
            <b>Minimaalne kirjaliku tõlke maht on 0,5 lehekülge. Kirjaliku tõlke hinnad on toodud 1 standardlehekülje
                kohta.</b><br/><br/>
            <b>Kui tekst on arvutis, saab teksti mahu Microsoft Wordis kergesti kindlaks määrata: Tools > Word Count >
                Characters with spaces ja selle arvu jagamisel 1800-ga saab teada, kui palju tõlkemahtu on.</b>
            <ul>
                <li>Kirjaliku tõlke puhul arvestatakse hinda tõlketeksti e sihtkeele standardlehekülje alusel. Euroopas
                    on
                    üldlevinud standardlehekülg 1800 tähemärki koos tühikutega ehk 30 rida, 60 tähemärki reas.
                </li>
                <li>Suulise tõlketeenuse hind on 1 tunni ehk 60 minuti kohta.</li>
                <li>Küljendamise/kujundamise hind on toodud 1 A4 leheküljele.</li>
            </ul>
            <table>
                <tr>
                    <th>Keelesuund</th>
                    <th>Hind (€)</th>
                </tr>
                <tr>
                    <td>Eesti-vene/inglise-eesti</td>
                    <td>10.90</td>
                </tr>
                <tr>
                    <td>Inglise-vene-inglise</td>
                    <td>14.00</td>
                </tr>
                <tr>
                    <td>Masintõlke järeltoimetamine</td>
                    <td>Küsi pakkumist!</td>
                </tr>
                <tr>
                    <td>Toimetamine alates</td>
                    <td>4.50</td>
                </tr>
                <tr>
                    <td>Korrektuur alates</td>
                    <td>3.50</td>
                </tr>
                <tr>
                    <td>Suuline tõlketeenus</td>
                    <td>60.00/h</td>
                </tr>
                <tr>
                    <td>Küljendamine/kujundamine alates</td>
                    <td>4.00</td>
                </tr>
            </table>
        </div>
    );
};

export default EeHinnakiri;