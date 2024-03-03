import React from "react";
import "./App.css";

const Button = ({ buttonText, ask, setAsk }) => {
  return (
    <button
      className={buttonText === ask ? "selected" : null}
      onClick={() => {
        setAsk(buttonText);
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
