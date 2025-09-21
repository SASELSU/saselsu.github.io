import { useEffect, type ReactNode } from "react";
import ReactGA from "react-ga4";
import {
    HashRouter,
    Route,
    Routes
} from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./hooks/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Eboard from "./pages/Eboard";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Hackathon from "./hackathon/hackathon";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";
import Faris from "./pages/Faris";

import "@fontsource/bebas-neue"; // Defaults to weight 400.
import "@fontsource/red-hat-display"; // Defaults to weight 400.
import "@fontsource/montserrat"; // Defaults to weight 400.
import "@fontsource/adlam-display"; // Defaults to weight 400.

import "./index.css";

export default function App (): ReactNode {
    useEffect(() => {
        if (import.meta.env.VITE_REACT_APP_GA_ID) {
            ReactGA.initialize(import.meta.env.VITE_REACT_APP_GA_ID);
            ReactGA.send({
                hitType: "pageview",
                page: "/",
                title: "Landing Page"
            });
        }
    });

    return (
        <HashRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />
                <Route path="/eboard" element={<Eboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/hackathon" element={<Hackathon />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/join" element={<Join />} />

                {/* Custom */}
                <Route path="/byebyefaris" element={<Faris />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}
