import Header from "./Header";
import Content from "./content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
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

  return (
    <>
      <div className="App">
        <Header title="Groceries" />
        <Content items={items} setitems={setitems} />
        <Footer itemsLength={items.length} />
      </div>
    </>
  );
}

export default App;

// 47:20 into the course!!
