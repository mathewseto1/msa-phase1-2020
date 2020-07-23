import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../Styles/Style.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Collapse from '@material-ui/core/Collapse';

interface ICharacterCardProps{
    image: string | undefined,
    characterName:string | undefined,
    characterInformation: String[],
}

const useStyles = makeStyles((theme) => ({

    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',}
    }));


export default function CharacterCards(props:ICharacterCardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </div>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Have not implemented any features for the expanding icon yet.
          <iframe src="https://giphy.com/embed/sIIhZliB2McAo" title = "nyan cat" width="120" height="100" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nyan-cat-sIIhZliB2McAo">via GIPHY</a></p>
          </Typography>

        </CardContent>
        </Collapse>   
            
            </CardActionArea>
        </Card>
    )
}
