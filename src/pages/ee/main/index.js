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
                <h2>Kiire tõlketeenus parima hinnaga</h2>
                <p>Tõlgime sinu eest – kiirelt ja soodsalt!
                    Miks kulutada oma väärtuslikku aega ja püüda tõlkida ise, kui sellele kulub väga palju aega?
                    Kui sul on kordki see mõte pähe tulnud, siis nüüd oled sa jõudnud õigesse kohta, mis selle olukorra
                    lahendab.
                </p>

                <a href="#">KÜSI PAKKUMIST</a>
            </div>
            <div className="Text2Container">
                <div className="MainText2">
                    <h2>OMA TÖÖS JÄRGIME KAHTE PÕHIMÕTET – TÖÖ PEAB OLEMA TEHTUD KVALITEETSELT JA TÄHTAEGSELT!</h2>
                    <p>Tõlkebüroo Brainbox töös lähtutakse Euroopa tõlketeenuse standardist ISO 17100 ja Masintõlke
                        toimetamise standardist ISO 18587.</p>

                    <p> Standardi eesmärk on määrata kindlaks nõuded seoses kõigi tõlkeprotsessi puudutavate
                        aspektidega, mis mõjutavad tõlketeenuse kvaliteeti ja selle osutamise korda.</p>

                    <p>Lisaks sellele on Brainboxi igapäevatöö aluseks ISO 9001 kvaliteedistandardi nõuded.</p>

                    <p>Nende standartide järgimine tagab kõrgel tasemel teeninduse ja kvaliteetse tõlketeenuse.</p>
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