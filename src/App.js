import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          () => {
            return { monsters: data };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return {
        search: e.target.value,
      };
    });
  };

  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;

    const filtered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log("rendered");
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          onSearchChange={onSearchChange}
          className="search-box-monsters"
        />

        <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
