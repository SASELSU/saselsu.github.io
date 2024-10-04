import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  HashRouter as Router,
  Routes,
  Route,
  withRouter,
  ScrollRestoration,
} from "react-router-dom";
import ReactGA from "react-ga4" //for google analytics
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/home";
import About from "./pages/about";
import EBoard from "./pages/eboard";
import Events from "./pages/events";
import Hackathon from "./hackathon/hackathon";
import Sponsors from "./pages/sponsors";
import Gallery from "./pages/gallery";
import './App.css';

function App() {
  useEffect(() => {
    ReactGA.initialize("G-TXL5S1SFTF");
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Landing Page" });
    ReactGA.send({ hitType: "pageview", page: "/about", title: "About Page" });
    ReactGA.send({ hitType: "pageview", page: "/events", title: "Events Page" });
    ReactGA.send({ hitType: "pageview", page: "/gallery", title: "Gallery Page" });
    ReactGA.send({ hitType: "pageview", page: "/hackathon", title: "Hackathon Page" });
  }, [])

  return (
    <>
      <Router>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route
          exact path="/"
          element = {<Home />}
        />
        <Route
          path="/about"
          element = {<About />}
        />
        <Route
          path="/eboard"
          element = {<EBoard />}
        />
        <Route
          path="/events"
          element = {<Events />}
        />  
        <Route
          path="/sponsors"
          element = {<Sponsors />}
        />
        <Route
          path="/hackathon"
          element = {<Hackathon />}
        />
        <Route
          path="/gallery"
          element = {<Gallery />}
        />
      </Routes>
      <Footer/>
    </Router>
    </>

  );
}

export default App;
