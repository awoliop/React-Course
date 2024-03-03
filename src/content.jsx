import React, { useState } from "react";
import "./content.css";
import styled, { __PRIVATE__ } from "styled-components";
import { css } from "styled-components";
import ItemList from "./ItemList";
import ApiRequest from "./ApiRequest";

const content = ({
  items,
  setitems,
  setAndSaveItems,
  API_URL,
  fetchError,
  setFetchError,
}) => {
  const itemCounter = () => {
    return (length = items.length);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    /*
    🔥🔥🔥
     we just changed the setAnd save Item which was saving the data to the local
     storage but now if has been handled by the useEffect in the App.js..so all we have to do it set the items and it will be saved to the local storage
     */
    setitems(listItems);

    const myItem = listItems.filter((item) => item.id === id);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;

    const result = await ApiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id != id);

    /*
    🔥🔥🔥
     we just changed the setAnd save Item which was saving the data to the local
     storage but now if has been handled by the useEffect in the App.js..so all we have to do it set the items and it will be saved to the local storage
     */

    setitems(listItems);

    const deleteOptions = { method: "DELETE" };

    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
