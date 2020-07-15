import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import CharacterCards from '../Components/CharacterCards';

interface IState{
    links: any[];
    data: any[];
    name:string;
    img:string;

    birthday:string;
    occupation:any[];
    status:string;
    nickname:string;

}

interface IMediaGridProps {
    SearchQuery: (string | null);
}

export default function MediaGrid(props: IMediaGridProps) {

    const [ItemArray, setItemArray] = useState<IState[]>([{links:[],data:[],name:"",img:"",birthday:"", occupation:[], status:"", nickname:""}])

        useEffect(() => {
            fetch('https://www.breakingbadapi.com/api/characters?name='+props.SearchQuery)
            .then(response => response.json())
            .then(response => {setItemArray(response)
            })
            .catch(() => console.log("Something went wrong")
            );

        },
        [props.SearchQuery]);

        var Cards: JSX.Element[] = [];
        
        ItemArray.forEach((el: IState, i: Number) => {
            
            if (el === null || el === undefined || ItemArray.length === 0) {
                return;
            }
            var characterdescription = "Birthday:" + el["birthday"] + " " + "fsddddddddddddddddddddddddddddddddddddddddasdfsfsd"
            

            Cards.push(
                <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                    {/* <CharacterCards image={""} characterInformation={el["name"]} /> */}
                    <CharacterCards image={el["img"]} characterName={el["name"]} characterInformation ={characterdescription} />
                </Grid>)
        })

    return (
        <div>
             <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
            
        </div>
    )
}
