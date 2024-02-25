import React, { useState } from "react";
import "./content.css";
import styled from "styled-components";
import { css } from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const LIST_NAME = ["Awelker", "Fuad", "Sumeya", "Eman"];

const content = () => {
  const [items, setitems] = useState(
    // JSON.parse(localStorage.getItem("Shopping_list1")) ||
    [
      {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted",
      },
      {
        id: 2,
        checked: false,
        item: "Item 2",
      },
      {
        id: 3,
        checked: false,
        item: "Item 3",
      },
    ]
  );

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setitems(listItems);

    localStorage.setItem("Shopping_list1", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setitems(listItems);
    localStorage.setItem("Shopping_list1", JSON.stringify(listItems));
  };
  return (
    <main className="main_content">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                htmlFor=""
                onDoubleClick={() => handleCheck(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>

              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="para">List is empty!!</p>
      )}
    </main>
  );
};

export default content;

// on App.js
