import React,{useState} from 'react';
import Button from '@material-ui/core/Button'
import { Grid, TextField } from '@material-ui/core';
import {IUserInput} from '../Common Intefaces/interfaces';

interface ISearchBarProps {
 SetUserInput: (userInput: IUserInput) => void; //the interface is a function that takes a user input and returns nothing.
}

function SearchBar(props: ISearchBarProps) {
    const [UserInput, SetUserInput] = useState<string | null>("");

    const handleUserInputChange =  (UserStringValue : string |null) =>{
        SetUserInput(UserStringValue);
    }

    const handleSubmit = () => {

        if (UserInput!== null && UserInput !== "" && UserInput.length !== 0){
            let userInput : IUserInput ={
                userInput:UserInput
            }
        // console.log(userInput)
        props.SetUserInput(userInput)
        }
        else{
            setFocusOn(true);
        }
    }

    const [FocusOn, setFocusOn] = useState<boolean>(false);

    return (
    <div>
        <Grid className = "ContainerGrid" container spacing={1}>
            <Grid item xs={1} sm={2}>
                <TextField id="outlined-basic" label="Enter a Character" variant="outlined" onClick = {() => setFocusOn(true)} error ={FocusOn && UserInput === ""} value = {UserInput} onChange ={text => handleUserInputChange(text.target.value)}/>
            </Grid>
            <Grid className = "test">
                <Button className = "SearchButton" variant="contained" color="primary" onClick = {handleSubmit}>Search</Button>
            </Grid>
        
        </Grid>

    </div>
    )
}

export default SearchBar