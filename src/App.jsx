import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
function App() {
  const API_URL = "http://localhost:3000/items";
  const [items, setitems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");
  const [fetchError, setFetchError] = useState(null);
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

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        // if there is an isuue(error) with the fetch it will be caught by the line below and contiunded directly by the catch block of the code!!
        if (!response.ok) throw Error("Did not recieve data.");
        const listitems = await response.json();
        setitems(listitems);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      }
    };
    // they both do work ...but if our fetchItems function where to retur some value upon which another computation is done then we will you the async option
    // (async () => await fetchItems())();
    fetchItems();
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
        {/* <main>
          {!fetchError ? (
            <Content
              // if we are not search for anythin it would just render normally but if we are search it filters the items that contain the characters
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              setitems={setitems}
            />
          ) : (
            <p style={{ color: "red" }}>{fetchError}</p>
          )}
        </main> */}
        {/* another way of doing presenting the data or the error would be !! */}
        <main>
          {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
          {!fetchError && (
            <Content
              // if we are not search for anythin it would just render normally but if we are search it filters the items that contain the characters
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              setitems={setitems}
            />
          )}
        </main>
        <Footer itemsLength={items.length} />
      </div>
    </>
  );
}

export default App;
