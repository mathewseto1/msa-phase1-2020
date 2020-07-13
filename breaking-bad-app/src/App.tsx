import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import CharacterCards from './Components/CharacterCards'

function App() {
  return (
    <div className="App">
      <p>hello there</p>
      <SearchBar/>
      <CharacterCards/>
    </div>
  );
}

export default App;
