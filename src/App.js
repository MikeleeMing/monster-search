import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList/cardlist.component';
import { useState, useEffect } from "react";
import SearchBar from './components/SearchBar/searchbar.component';
import axios from 'axios';

const defaultMonsters = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
  }
}];

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios(
      'https://jsonplaceholder.typicode.com/users',
      );
      setMonsters(response.data);
      };
    fetchMonsters();
}, []);
  

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
    filtered = monsters
    } else {
    filtered = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    }
    setFilteredMonsters(filtered);
    }, [monsters, searchInput]);
    
  

    const handleInput = e => {
    setSearchInput(e.target.value)
    };

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar
      placeholder='Search Monster'
      handleInput={handleInput}
      />
      <CardList monsters={filteredMonsters} />

    </div>
  );
}

export default App;
