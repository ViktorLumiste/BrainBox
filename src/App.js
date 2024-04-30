import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
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
                <Route path="/tolkimine" element={<Tolkimine />} />
                <Route path="/tellimine" element={<Tellmine />} />
                <Route path="/hinnakiri" element={<Hinnakiri />}/>
                <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;