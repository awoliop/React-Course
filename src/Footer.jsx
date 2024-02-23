import React from "react";
import Timestamp from "./time/Timestamp";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div>Copyright &copy; {"   " + today.getFullYear()}</div>
      <Timestamp />
    </footer>
  );
};

export default Footer;
