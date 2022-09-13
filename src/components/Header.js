import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Resume from "./Resume";
import "../styles/Header.css";

export default function Header() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About></About>;
      case "Work":
        return <Work></Work>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
        return <Resume></Resume>;
    }
  };

  return (
    <div>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>{renderPage()}</div>
    </div>
  );
}
