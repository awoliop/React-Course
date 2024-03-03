import React from "react";

const LineItems = ({ item }) => {
  return <li key={item.id}>{JSON.stringify(item)}</li>;
};

export default LineItems;
