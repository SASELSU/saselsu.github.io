import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Events from "./pages/events";
import Forms from "./pages/forms";
import Hackathon from "./pages/hackathon";
import './App.css';

function App() {
  return (
    <Router>
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
          path="/events"
          element = {<Events />}
        />
        <Route
          path="/forms"
          element = {<Forms />}
        />
        <Route
          path="/hackathon"
          element = {<Hackathon />}
        />
        <Route
          path="/contact"
          element = {<Contact />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
