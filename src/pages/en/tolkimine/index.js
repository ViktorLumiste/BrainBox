import React from "react";

import styles from "./style.module.css"
const EnTolkimine = () => {
    return (
        <div className={styles.TolkimineContainer}>
            <h1>TRANSLATION</h1>
            <p className={styles.FillerText}>Our translators are educated in the field of philology and specialised
                    in different areas. As a
                    result, we are able to offer translations in all subject fields, whether it is law, economy,
                    technology, chemistry, informatics or medicine.</p>
            <h2>Technical texts</h2>
            <p className={styles.FillerText}>Technical texts are translated by people who are educated in the field of
                technology and able to
                translate texts of a general as well as of a more specific nature. Considering that the
                materials in this field are usually quite bulky, we ask that, if possible, you send the original
                materials to us in electronic form, so we could propose an exact fee.</p>
            <p className={styles.FillerText}>While translating technical texts, working closely with our clients is a
                great help, since it is
                typically the clients themselves who are most familiar with the terminology and are able to give
                instructions as to which terms to use.</p>
            <p className={styles.FillerText}>We also offer a discount fee for translations of a large volume. A longer
                period of completion is
                usually required for small projects, as getting to know the subject and the terminology may
                sometimes take even more time than the actual translating.</p>
            <h2>Law</h2>
            <p className={styles.FillerText}>Law is translated by people specialized in law. This means we can guarantee
                that the original text
                has been understood accurately and the terminology used relevantly even in the most complicated
                translations.</p>
            <p className={styles.FillerText}>Cooperation with the client is once again important, especially when it
                comes to understanding
                nuances. Attention must be paid to the formal and linguistic exactness of the original text,
                since the quality of translation is dependent on it.</p>
            <h2>Economic translations</h2>
            <p className={styles.FillerText}>The field of economic translations is also quite extensive, since
                everything connected to business
                and finance is concentrated under this section. Our translators manage to excel in economic
                translation as well as anywhere else.</p>
            <h2>Translating advertising texts</h2>
            <p className={styles.FillerText}>Translating advertising texts is a creative and interesting process, which
                at the same time takes a
                long time, as the translation has to cover all the nuances of the original text.</p>
            <p className={styles.FillerText}>The amount to be translated could be as little as a word or two, but
                finding the best translation
                could take hours. All of this means the translator has to adopt a creative approach and be
                familiar with many fields.</p>
            <p className={styles.FillerText}>Translating advertising texts requires a good command of language and an
                inventive mind, as it is not
                about simply replacing source language words with target language ones. When looking for a
                translation of an advertising text, we request you take a longer period of completion into
                consideration.</p>
            <h2>Medical texts</h2>
            <p className={styles.FillerText}>Medical texts are always translated by specialists educated in medicine.
                This subject is so specific
                that people without the relevant education are not able to deliver a professional
                translation.</p>
            <p className={styles.FillerText}>A quality translation is once again achieved by close cooperation between
                the client and the
                translator. As medical texts typically contain very specific terminology, it is also imperative
                that the translator knows who the end user of the text is, so that the terms could be
                simplified, if necessary, making the text readable to the general public, not just a circle of
                experts.</p>
        </div>
    );
};

export default EnTolkimine;