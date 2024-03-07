import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./App.css";
// import ItemList from "./ItemList";

const App = () => {
  const API_URL = "http://localhost:3001/items";
  const [ask, setAsk] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("ReLoad Page!!");
        const result = await response.json();
        setItems(result);
      } catch (error) {
        console.log(error.message);
        setItems(error.message);
      }
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
        <div className="container">
          <table>
            <thead>
              <tr>
                {Object.entries(items[0]).map(([key, value]) => {
                  return <td>{key}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.entries(item).map(([key, value]) => {
                      return <td key={key}>{JSON.stringify(value)}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
