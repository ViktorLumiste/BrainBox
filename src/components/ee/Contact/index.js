import React, { useState } from 'react';
import style from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EeContact = () => {
    const [showForm, setShowForm] = useState(false);

    const openContactForm = () => {
        setShowForm(true);
    };

    const closeContactForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            {!showForm && (
                <div onClick={openContactForm} className={style.ContactButtonContainer}>
                    <FontAwesomeIcon className={style.MailIcon} icon={faEnvelope} />
                    <p className={style.ButtonText}>Võta ühendust!</p>
                </div>
            )}
            {showForm && (
                <div className={style.ContactContainer}>
                    <div className={style.ContactFormHeader}>
                        <div></div>
                        <p className={style.HeaderTitle}>Võta meiega ühendust!</p>
                        <button className={style.CloseButton} onClick={closeContactForm}>X</button>
                    </div>
                    <div className={style.ContactFormContainer}>
                        <form>
                            <div className={style.FormGroup}>
                                <label htmlFor="name">Nimi</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className={style.FormGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className={style.FormGroup}>
                                <label htmlFor="message">Sõnum</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" className={style.SubmitButton}>Saada</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EeContact;
