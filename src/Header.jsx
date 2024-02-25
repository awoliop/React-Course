import React from "react";
import "./header.css";
import styled from "styled-components";
import { css } from "styled-components";

const Header = (props) => {
  const headerStyle = {
    backgroundColor: "mediumblue",
    color: "#fff",
  };

  return (
    <header className="header" style={headerStyle}>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;

// on App.js
