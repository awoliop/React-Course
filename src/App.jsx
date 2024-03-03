import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./App.css";
import ItemList from "./ItemList";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [ask, setAsk] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${API_URL}${ask}`);
      const result = await response.json();
      setItems(result);
    };

    fetchItems();
  });

  return (
    <>
      <div className="buttons">
        <Button type="button" buttonText="users" ask={ask} setAsk={setAsk} />
        <Button type="button" buttonText="posts" ask={ask} setAsk={setAsk} />
        <Button type="button" buttonText="comments" ask={ask} setAsk={setAsk} />
      </div>
      <div className="lists">
        <ItemList items={items} ask={ask} />
      </div>
    </>
  );
};

export default App;
