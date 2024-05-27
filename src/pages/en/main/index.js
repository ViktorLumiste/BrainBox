import React from "react";
import "./style.css"

const Main = () => {
    return (
        <div>
            <div className="TitleContainer">
                <h2 className="MediumTitle">Tõlgime sinu eest – kiirelt ja soodsalt!</h2>
                <h1 className="BigTitle">Welcome to Brainbox</h1>
            </div>
            <div className="MainText1">
                <h2>Quick translation service for the best price</h2>
                <p>We will translate for you quickly and affordably!
                    Why spend your valuable time by trying to translate a text yourself if you could use it for something much more useful that would also bring in money.
                    If you have ever considered this option, you are now in the right place.
                </p>

                <a href="#">ASK FOR OFFER</a>
            </div>
            <div className="Text2Container">
                <div className="MainText2">
                    <h2>IN OUR WORK, WE FOLLOW TWO PRINCIPLES – WORK HAS TO BE OF HIGH QUALITY AND PERFORMED ON TIME!</h2>
                    <p>The works of the translation bureau Brainbox comply with the European translation services standard ISO 17100 and machine translation post-editing standard ISO 18587 .</p>

                    <p> The goal of the standard is to determine the requirements for all aspects of translation process that influence the translation quality and the procedure for providing the service.</p>

                    <p>In addition, the everyday work of Brainbox is based on the requirements of the quality standard ISO 9001. </p>

                    <p>Following these standards guarantees high-level service and quality translations.</p>
                    <div className="SloganContainer">
                        <hr className="SloganLine"/>
                        <h3 className="Slogan">Slogan text!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;