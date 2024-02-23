import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div>Copyright &copy; {"   " + today.getFullYear()}</div>
    </footer>
  );
};

export default Footer;
