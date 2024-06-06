import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Ee from "./pages/ee/main"
import EeTolkimine from "./pages/ee/tolkimine";
import EeTellimine from "./pages/ee/tellimine";
import EeHinnakiri from "./pages/ee/hinnakiri";
import EeKontakt from "./pages/ee/kontakt";
import En from "./pages/en/main";
import EnTolkimine from "./pages/en/tolkimine";
import EnHinnakiri from "./pages/en/hinnakiri";
import EnKontakt from "./pages/en/kontakt";
import EnTellimine from "./pages/en/tellimine";
import Ru from "./pages/ru/main";
import RuTolkimine from "./pages/ru/tolkimine";
import RuTellimine from "./pages/ru/tellimine";
import RuHinnakiri from "./pages/ru/hinnakiri";
import RuKontakt from "./pages/ru/kontakt";
import EeNavbar from "./components/ee/Navbar";
import EeFooter from "./components/ee/Footer";
import EnNavbar from "./components/en/Navbar";
import EnFooter from "./components/en/Footer";
import RuNavbar from "./components/ru/Navbar";
import RuFooter from "./components/ru/Footer";
import EeContact from "./components/ee/Contact";
import EnContact from "./components/en/Contact";
import RuContact from "./components/ru/Contact";
import './App.css';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/en/*" element={<EnNavbar/>}/>
                    <Route path="/ru/*" element={<RuNavbar/>}/>
                    <Route path="/*" element={<EeNavbar/>}/>
                </Routes>
                <main className="Content">
                    <Routes>
                        <Route exact path="/" element={<Ee/>}/>
                        <Route path="/tolkimine" element={<EeTolkimine/>}/>
                        <Route path="/tellimine" element={<EeTellimine/>}/>
                        <Route path="/hinnakiri" element={<EeHinnakiri/>}/>
                        <Route path="/kontakt" element={<EeKontakt/>}/>
                        <Route exact path="/en/" element={<En/>}/>
                        <Route path="/en/tolkimine" element={<EnTolkimine/>}/>
                        <Route path="/en/tellimine" element={<EnTellimine/>}/>
                        <Route path="/en/hinnakiri" element={<EnHinnakiri/>}/>
                        <Route path="/en/kontakt" element={<EnKontakt/>}/>
                        <Route exact path="/ru/" element={<Ru/>}/>
                        <Route path="/ru/tolkimine" element={<RuTolkimine/>}/>
                        <Route path="/ru/tellimine" element={<RuTellimine/>}/>
                        <Route path="/ru/hinnakiri" element={<RuHinnakiri/>}/>
                        <Route path="/ru/kontakt" element={<RuKontakt/>}/>
                    </Routes>
                </main>
                <footer>
                    <Routes>
                        <Route path="/en/*" element={<EnFooter/>}/>
                        <Route path="/ru/*" element={<RuFooter/>}/>
                        <Route path="/*" element={<EeFooter/>}/>
                    </Routes>
                </footer>
                <Routes>
                    <Route path="/en/*" element={<EnContact/>}/>
                    <Route path="/ru/*" element={<RuContact/>}/>
                    <Route path="/*" element={<EeContact/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;