import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface ICharacterCardProps{
    image: string | undefined,
    characterInformation:string | undefined
}

// export default function CharacterCards(props:ICharacterCardProps) {
export default function CharacterCards() {
    return (
        <Card className="MediaCardContainer">
            <CardActionArea>
            <CardMedia image = "./FILL IN LATER"
            style={{height: 20, paddingTop: '20%'}}
            title="Place holder image"
            />
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
            </CardActionArea>
        </Card>
    )
}
