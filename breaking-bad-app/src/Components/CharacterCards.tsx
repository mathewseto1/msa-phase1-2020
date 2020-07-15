import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface ICharacterCardProps{
    image: string | undefined,
    characterName:string | undefined,
    characterInformation: string | undefined,
}

export default function CharacterCards(props:ICharacterCardProps) {
// export default function CharacterCards() {
    return (
        <Card className="MediaCardContainer">
            <CardActionArea>
            <CardMedia image = {props.image}
            style={{height:400 , paddingTop: '20%'}}
            title={props.characterName}
            />
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.characterName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.characterInformation}
          </Typography>
        </CardContent>
            </CardActionArea>
        </Card>
    )
}
