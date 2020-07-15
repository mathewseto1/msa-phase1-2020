import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import CharacterCards from './Components/CharacterCards'
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
      <p>hello there</p>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
      <MediaGrid SearchQuery={UserInput.userInput}/>

    </div>
  );
}

export default App;
