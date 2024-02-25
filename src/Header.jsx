import React from "react";
import "./header.css";
import styled from "styled-components";
import { css } from "styled-components";

const Header = ({ title }) => {
  // we cana destructure the props as it passed on and use it like this or how we normally have been using !!
  // const Header = (props) => {
  const headerStyle = {
    backgroundColor: "mediumblue",
    color: "#fff",
  };

  return (
    <header className="header" style={headerStyle}>
      <h1>{title}</h1>
      {/* <h1>{props.title}</h1> */}
    </header>
  );
};

export default Header;

// on App.js
