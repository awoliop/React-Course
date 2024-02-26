import React, { useState } from "react";
import "./content.css";
import styled from "styled-components";
import { css } from "styled-components";
import ItemList from "./ItemList";

const content = ({ items, setitems, setAndSaveItems }) => {
  const itemCounter = () => {
    return (length = items.length);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setAndSaveItems(listItems);
  };
  return (
    <main className="main_content">
      {items.length ? (
        <ItemList
          items={items}
          setitems={setitems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="para">List is empty!!</p>
      )}
    </main>
  );
};

export default content;

// on App.js
