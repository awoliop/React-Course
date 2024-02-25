import React from "react";
import Timestamp from "./time/Timestamp";

const Footer = ({ itemsLength }) => {
  return (
    <footer>
      <p>
        {/* singular and plural handle!! */}
        {itemsLength} List {itemsLength === 1 ? "Item" : "Items"}
      </p>
      <Timestamp />
    </footer>
  );
};

export default Footer;
