import React, { Children, FC, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { useDictionary } from "./hooks/useDictionary";

/**
 * Can be added throatling and debouncing depending on the search feature requirements
 */

function App() {
  const [search, setSearch] = useState("");
  const dictionary = useDictionary();

  const handleSearchItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    // search functionality will be there
  };

  return (
    <div className="app">
      <div className="header">
        <div>Render Virtualized</div>
      </div>

      <div className="search">
        <input
          placeholder="Search for"
          value={search}
          onChange={handleSearchItems}
          className="input"
          type="text"
        />
      </div>

      <div className="content">
        <List items={dictionary} />
      </div>

      {/* <div className="content">
        <ListWithVirtualized items={dictionary} />
      </div> */}
    </div>
  );
}

export default App;
