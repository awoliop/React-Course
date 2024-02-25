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
//➡️➡️ for when we are not recieving no data or props is not being passed on for some reason!!
Header.defaultProps = {
  title: "Default Title!",
};

export default Header;

// on App.js
