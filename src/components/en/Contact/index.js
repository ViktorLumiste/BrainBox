import React, { useState } from 'react';
import style from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EnContact = () => {
    const [showForm, setShowForm] = useState(false);

    const openContactForm = () => {
        setShowForm(true);
    };

    const closeContactForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            {!showForm &&(
            <div onClick={openContactForm} className={style.ContactButtonContainer}>
                <FontAwesomeIcon className={style.MailIcon} icon={faEnvelope} />
                <p className={style.ButtonText}>Contact us!</p>
            </div>
            )}
            {showForm && (
                <div className={style.ContactContainer}>
                    <div className={style.ContactFormHeader}>
                        <div></div>
                        <p className={style.HeaderTitle}>Contact us!</p>
                        <button className={style.CloseButton} onClick={closeContactForm}>X</button>
                    </div>
                    <div className={style.ContactFormContainer}>
                        <form>
                            <div className={style.FormGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className={style.FormGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className={style.FormGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" className={style.SubmitButton}>Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EnContact;
