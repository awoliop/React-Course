import React from "react";
import "./content.css";
import styled from "styled-components";
import { css } from "styled-components";
const content = () => {
  const handleNamChange = () => {
    const names = ["Awelker", "Fuad", "Sumeya", "Eman"];

    const randompicker = Math.floor(Math.random() * 4);
    return names[randompicker];
  };
  const Button = styled.button`
    background-color: red;
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: white;
  `;

  const Buttons = styled(Button)`
    padding-bottom: 30px;
    ${(props) =>
      props.yellow &&
      css`
        background-color: yellow;
      `}
  `;

  return (
    <main className="main_content">
      <h1>Hello {handleNamChange()}</h1>
      <Button>Click me</Button>
      <Buttons>don't click me </Buttons>
      <Buttons yellow>don't click me </Buttons>
    </main>
  );
};

export default content;
