import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../Styles/Style.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface ICharacterCardProps{
    image: string | undefined,
    characterName:string | undefined,
    characterInformation: String[],
}


export default function CharacterCards(props:ICharacterCardProps) {
    return (
        <Card className="MediaCardContainer">
            <CardActionArea>
            {props.image?(<CardMedia image = {props.image}
            className = "CardImage"
            title={props.characterName}/>
            ):""
            }
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.characterName}
          </Typography>
          <div >
            <List>
                <ListItem className = "listitem">
                    {props.characterInformation.map((value,index) => {
                        if(index !== 6){
                            return <ListItemText key = {value[6]}>{value}</ListItemText>
                        }
                        else{
                            return ""
                        }
                    }
                    )}
                </ListItem>
            </List>
          </div>
        </CardContent>
            </CardActionArea>
        </Card>
    )
}
