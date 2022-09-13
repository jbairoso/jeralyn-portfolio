import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="pages">
        <Header></Header>
        <Routes>
          <Route path="/jeralynAiroso/" element={<Home />} />
          <Route path="/jeralynAiroso/Home" element={<Home />} />
          <Route path="/jeralynAiroso/About" element={<About />} />
          <Route path="/jeralynAiroso/Work" element={<Work />} />
          <Route path="/jeralynAiroso/Contact" element={<Contact />} />
          <Route path="/jeralynAiroso/Resume" element={<Resume />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
