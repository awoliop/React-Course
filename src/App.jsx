import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import "./index.css";
function App() {
  const API_URL = "http://localhost:3000/items";
  const [items, setitems] = useState([]);

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
    setitems(listItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const [search, setSearch] = useState("");

  const [color, setColor] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listitems = await response.json();
        setitems(listitems);
        console.log(listitems);
      } catch (error) {
        console.log(error.stack);
      }
    };
    (async () => await fetchItems())();
  }, []);

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
        />
        <Footer itemsLength={items.length} />
      </div>
    </>
  );
}

export default App;

// 47:20 into the course!!
``;
