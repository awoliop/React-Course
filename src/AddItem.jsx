import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import "./index.css";
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef("");
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        autoFocus
        placeholder="Add Item"
        id="addItem"
        ref={inputRef}
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        required
      />

      <button
        type="submit"
        aria-label="Add item"
        // gives back focus to inputRef back to the input element where the ref is set to "inputRef"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
