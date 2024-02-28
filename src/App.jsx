import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
// import "./index.css";
function App() {
  const [items, setitems] = useState(
    JSON.parse(localStorage.getItem("Shopping_list1"))
  );

  const [newItem, setNewItem] = useState("");

  const addItem = (newItem) => {
    // checking if the items array is non-empty, for when it is empty to initialte it with 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myItem = {
      id,
      checked: false,
      item: newItem,
    };
    const listItems = [...items, myItem];
    setAndSaveItems(listItems);
  };

  const setAndSaveItems = (listItems) => {
    setitems(listItems);
    localStorage.setItem("Shopping_list1", JSON.stringify(listItems));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const [search, setSearch] = useState("");

  const [color, setColor] = useState("");

  // renders with every reload of change in component/ or reload of component!
  useEffect(() => {
    console.log("render");
  });

  // when the page loads/ not reloads
  useEffect(() => {
    console.log("render");
  }, []);

  // rerenders whenever there is a change to the items array
  useEffect(() => {
    console.log("render");
  }, [items]);
  // useEffect hook runs after compnent has been rendereed and not in the order it is written in the code!!
  console.log("before");
  useEffect(() => {
    console.log("render");
  }, [items]);

  console.log("After");
  return (
    <>
      <div className="App">
        <Header title="Groceries" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

        <SearchItem search={search} setSearch={setSearch} />
        <Content
          // if we are not search for anythin it would just render normally but if we are search it filters the items that contain the characters
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          setitems={setitems}
          setAndSaveItems={setAndSaveItems}
        />
        <Footer itemsLength={items.length} />
      </div>
    </>
  );
}

export default App;

// 47:20 into the course!!
``;
