import React, { useState } from "react";
import "./content.css";
import styled from "styled-components";
import { css } from "styled-components";
const content = () => {
  const handleNamChange = () => {
    const names = ["Awelker", "Fuad", "Sumeya", "Eman"];

    const randompicker = Math.floor(Math.random() * 4);
    return names[randompicker];
  };

  const handleClick = () => {
    console.log("you cliked it !!");
  };
  const handleClick2 = (name) => {
    console.log(`you cliked  ${name}`);
  };

  return (
    <main className="main_content">
      <h1>Hello {handleNamChange()}</h1>
      <button onClick={handleClick}>Click it !!</button>
      <button
        onClick={() => {
          handleClick2("Fuad!");
        }}
      >
        Click it !!
      </button>
    </main>
  );
};

export default content;

// on App.js
