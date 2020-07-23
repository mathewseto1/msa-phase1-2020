import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import {IUserInput} from './Common Intefaces/interfaces';
import MediaGrid from './Components/MediaGrid';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    userInput: "",
  });

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
// added a dark theme to the website
  return (
    
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className = "Title">
        <img className = "svgImage" alt = "Breaking bad logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png"/>
        Breaking bad Character Finder
        <Switch checked={darkState} onChange={handleThemeChange} />
      </div>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
      <MediaGrid SearchQuery={UserInput.userInput}/>
      </ThemeProvider>
    </div>
    
  );
}

export default App;
