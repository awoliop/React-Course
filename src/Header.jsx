import React from "react";
import "./header.css";

const Header = () => {
  const headerStyle = {
    backgroundColor: "mediumblue",
    color: "#fff",
  };
  return (
    <header className="header" style={headerStyle}>
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;

// on App.js
