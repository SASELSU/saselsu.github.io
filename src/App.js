import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  HashRouter as Router,
  Routes,
  Route,
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
import Faris from "./pages/faris";
import './App.css';
import { createBrowserHistory } from "history";


function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Landing Page" });
  }, [])

  var history = createBrowserHistory();

  return (
    <>
      <Router history={history}>
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

      <Route
          path="/byebyefaris"
          element = {<Faris />}
        />
      </Routes>
      <Footer/>
    </Router>
    </>

  );
}

export default App;
