import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  //
  const [monsters, setMonsters] = useState([]);
  const [searchField, setsearchField] = useState("");
  //
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setMonsters(res));
  }, []);
  //
  const searchFieldChange = (event) => {
    setsearchField(event.target.value.toLowerCase());
  };
  //
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField)
  );
  //
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        handleChange={searchFieldChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
