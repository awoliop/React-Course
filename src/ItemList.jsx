import React from "react";
import LineItems from "./LineItems";

const ItemList = ({ items, ask }) => {
  return (
    <ul>
      {items.map((item) => {
        return <LineItems item={item} ask={ask} />;
      })}
    </ul>
  );
};

export default ItemList;
