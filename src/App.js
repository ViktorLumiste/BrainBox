import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Tolkimine from "./pages/tolkimine";
import Tellmine from "./pages/tellimine";
import Hinnakiri from "./pages/hinnakiri";
import Kontakt from "./pages/kontakt";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/tolkimine" element={<Tolkimine />} />
                <Route path="/tellimine" element={<Tellmine />} />
                <Route path="/hinnakiri" element={<Hinnakiri />}/>
            </Routes>
        </Router>
    );
}

export default App;