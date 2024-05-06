import React from "react";
import "./style.css"

const Home = () => {
    return (
        <div>
            <div className="TitleContainer">
                <h2 className="MediumTitle">Tõlgime sinu eest – kiirelt ja soodsalt!</h2>
                <h1 className="BigTitle">Welcome to Brainbox</h1>
                <h3 className="SmallTitle">ABIMEES JA NÕUSTAJA, KELLELE SAAB ALATI KINDEL OLLA</h3>
            </div>
            <div className="MainText1">
                <h2>PROFESSIONAALSED TÕLKESPETSIALISTID</h2>
                <p>Tänu innovaatilisele lähenemisele tõlkimises oleme Brainboxis ühendanud tõlkespetsialiste, kes tõlgivad vaid keelde, mida nad valdavad oma emakeele tasemel.</p>

                <p>Meie tõlkijatel on pikaaegne tõlkekogemus erinevates valdkondades:</p>

                <ul>
                <li>juriidika</li>
                <li>majandus</li>
                <li>tehnika</li>
                <li>IT</li>
                <li>pangandus</li>
                </ul>

                <p>Osutame järgmisi tõlketeenuseid:</p>
                <ul>
                    <li>kirjalik tõlge</li>
                    <li>masintõlke järeltoimetamine</li>
                    <li>keelekorrektuur</li>
                    <li>toimetamine</li>
                    <li>trükieelne väljastuskontroll</li>
                    <li>vandetõlge</li>
                    <li>subtiitrite tõlge</li>
                </ul>
                <p>Tõlkimine on lihtne, kui seda teevad asjatundjad. Meil töötavad üksnes oma ala professionaalid, tänu
                kellele saame tagada kiired ja soodsad tõlked.</p>
            </div>
            <div className="Text2Container">
                <div className="MainText2">
                    <h2>OMA TÖÖS JÄRGIME KAHTE PÕHIMÕTET – TÖÖ PEAB OLEMA TEHTUD KVALITEETSELT JA TÄHTAEGSELT!</h2>
                    <p>Tõlkebüroo Brainbox töös lähtutakse Euroopa tõlketeenuse standardist ISO 17100 ja Masintõlke
                        toimetamise standardist ISO 18587.</p>

                    <p>Standardi eesmärk on määrata kindlaks nõuded seoses kõigi tõlkeprotsessi puudutavate
                        aspektidega, mis mõjutavad tõlketeenuse kvaliteeti ja selle osutamise korda.</p>

                    <p>Lisaks sellele on Brainboxi igapäevatöö aluseks ISO 9001 kvaliteedistandardi nõuded.</p>

                    <p>Nende standartide järgimine tagab kõrgel tasemel teeninduse ja kvaliteetse tõlketeenuse.</p>
                    <div className="SloganContainer">
                        <hr className="SloganLine"/>
                        <h3 className="Slogan">Tulge koos meiega head tõlget nautima!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;