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
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
      <MediaGrid SearchQuery={UserInput.userInput}/>

    </div>
  );
}

export default App;
