import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import {IUserInput} from './Common Intefaces/interfaces';
import MediaGrid from './Components/MediaGrid';

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    userInput: "",
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App">
      <div className = "Title">
        <img className = "svgImage" alt = "Breaking bad logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png"/>
        Breaking bad Character finder
      </div>
      <p>Test environment</p>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
      <MediaGrid SearchQuery={UserInput.userInput}/>

    </div>
  );
}

export default App;
