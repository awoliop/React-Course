import React, { useState } from "react";
import "./content.css";
import styled from "styled-components";
import { css } from "styled-components";

const LIST_NAME = ["Awelker", "Fuad", "Sumeya", "Eman"];
const content = () => {
  // const randompicker = Math.floor(Math.random() * 4);
  const [names, setNames] = useState("Awelker");

  const handleNamChange = () => {
    const randompicker1 = Math.floor(Math.random() * 4);
    let newName = LIST_NAME[randompicker1];
    setNames(newName);

    return newName;
  };

  const changeOnCommand = () => {
    return handleNamChange();
  };

  const handleClick = () => {
    console.log("you cliked it !!");
  };
  const handleClick2 = (name) => {
    console.log(`you cliked  ${name}`);
  };
  const handleClick3 = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerText);
  };
  const greeting = ["Hello", "HI", "Asww"];
  const [greetings, setGreetings] = useState("Asww");

  const changeGreeting = () => {
    const randomPicker = Math.floor(Math.random() * 3);
    setGreetings(greeting[randomPicker]);
  };

  return (
    <main className="main_content">
      {/* the bracket make it run immediatley  and not when called upon by an event!! */}
      <h1>Hello {names}</h1>
      <button onClick={handleNamChange}>change Name!!</button>
      <button onClick={handleClick}>Click it !!</button>
      {/* this function does not run immediately as it is wrapped up in the anonymoous function which only is triggered upon click!1 */}
      <button
        onClick={() => {
          handleClick2("Fuad!");
        }}
      >
        Click it !!
      </button>
      <button onClick={(event) => handleClick3(event)}>click for event</button>
      {/* <h1 onDoubleClick={handleClick}>Hello {handleNamChange()}</h1> */}

      <h1>{greetings}</h1>
      <button onClick={changeGreeting}>change-Greeting</button>
    </main>
  );
};

export default content;

// on App.js
