import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Forms from "./pages/Forms";
import Hackathon from "./pages/Hackathon";
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
