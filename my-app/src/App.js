import { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import CardListComponent from "./Components/Card-list/card-list.component";
import "./App.css";
import SearchBox from "./Components/Seach-box/search-box.component";

const App = function () {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);
  useEffect(() => {
    const monsters_filter = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilterMonsters(monsters_filter);
  }, [searchField, monsters]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-heading">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monster-search-box"
        placeholder="search monsters"
      />
      <CardListComponent monsters={filterMonsters} />
    </div>
  );
};
/*
let monstersALL = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        monstersALL = users;
        this.setState({
          monsters: monstersALL,
        });
      });
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({
      searchField,
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const monsters_filter = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="app-heading">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className="monster-search-box"
          placeholder="search monsters"
        />
        <CardListComponent monsters={monsters_filter} />
      </div>
    );
  }
}
*/

export default App;
