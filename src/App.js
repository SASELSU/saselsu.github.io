import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  HashRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/home";
import About from "./pages/about";
import EBoard from "./pages/eboard";
import Events from "./pages/events";
import Hackathon from "./pages/hackathon";
import Sponsors from "./pages/sponsors";
import Gallery from "./pages/gallery";
import './App.css';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <ScrollToTop/>

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