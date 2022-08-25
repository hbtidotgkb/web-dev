import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {useState} from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NameThatEmoji() {
  const [open, setOpen] = React.useState(false);
  const [isVisibleJasonBrand, setIsVisibleJasonBrand] = useState(false);
  const [isVisibleCathyBrand, setIsVisibleCathyBrand] = useState(false);

  const [isVisibleJasonMovie, setIsVisibleJasonMovie] = useState(false);
  const [isVisibleCathyMovie, setIsVisibleCathyMovie] = useState(false);

  const [isVisibleJasonFood, setIsVisibleJasonFood] = useState(false);
  const [isVisibleCathyFood, setIsVisibleCathyFood] = useState(false);

  const [isVisibleJasonCity, setIsVisibleJasonCity] = useState(false);
  const [isVisibleCathyCity, setIsVisibleCathyCity] = useState(false);

  const [isVisibleJasonCelebrity, setIsVisibleJasonCelebrity] = useState(false);
  const [isVisibleCathyCelebrity, setIsVisibleCathyCelebrity] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const updateElement = async (id: string) => {
    const el = document.getElementById(id);
    for(var i=1;i<=15;i++) {
      el!.innerText="\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+i;
      await timeout(1000);
    }
    el!.innerText="\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"Time's UP!";
  };
  //Brand
  const revealEmojiJasonBrand = async (id: string) => {
    setIsVisibleJasonBrand(current => !current);
    updateElement(id);
  };

  const revealEmojiCathyBrand = (id: string) => {
    setIsVisibleCathyBrand(current => !current);
    updateElement(id);
  };

  //Movie
  const revealEmojiJasonMovie = (id: string) => {
    setIsVisibleJasonMovie(current => !current);
    updateElement(id);
  };

  const revealEmojiCathyMovie = (id: string) => {
    setIsVisibleCathyMovie(current => !current);
    updateElement(id);
  };

  //Food
  const revealEmojiJasonFood = (id: string) => {
    setIsVisibleJasonFood(current => !current);
    updateElement(id);
  };

  const revealEmojiCathyFood = (id: string) => {
    setIsVisibleCathyFood(current => !current);
    updateElement(id);
  };

  //City
  const revealEmojiJasonCity = (id: string) => {
    setIsVisibleJasonCity(current => !current);
    updateElement(id);
  };

  const revealEmojiCathyCity = (id: string) => {
    setIsVisibleCathyCity(current => !current);
    updateElement(id);
  };

  //Celebrity
  const revealEmojiJasonCelebrity = (id: string) => {
    setIsVisibleJasonCelebrity(current => !current);
    updateElement(id);
  };

  const revealEmojiCathyCelebrity = (id: string) => {
    setIsVisibleCathyCelebrity(current => !current);
    updateElement(id);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Name That Emoji
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Name That Emoji Quiz
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Team Jason" secondary="Brand Emoji Sequence" />
            <Typography variant='h4' visibility='hidden' style={{visibility: isVisibleJasonBrand ? 'visible' : 'hidden'}}>
                🔫🚫 
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleJasonBrand ? 'visible' : 'hidden'}}>
            <p id='jason_brand_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonBrand('jason_brand_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Brand Emoji Sequence"
            />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyBrand ? 'visible' : 'hidden'}}>
                 🇺🇸❌📰
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleCathyBrand ? 'visible' : 'hidden'}}>
            <p id='cathy_brand_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyBrand('cathy_brand_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>

          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason"
              secondary="Movie Emoji Sequence" />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonMovie ? 'visible' : 'hidden'}}>
                 🥊♣️
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleJasonMovie ? 'visible' : 'hidden'}}>
            <p id='jason_movie_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonMovie('jason_movie_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Movie Emoji Sequence"
            />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyMovie ? 'visible' : 'hidden'}}>
               ❓🚂👉🐲 
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleCathyMovie ? 'visible' : 'hidden'}}>
            <p id='cathy_movie_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyMovie('cathy_movie_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason" 
              secondary="Food Emoji Sequence" />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonFood ? 'visible' : 'hidden'}}>
               🚪E🦶🦶
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleJasonFood ? 'visible' : 'hidden'}}>
            <p id='jason_food_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonFood('jason_food_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Food Emoji Sequence"
            />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyFood ? 'visible' : 'hidden'}}>
                🥶🧘‍♂️🖼️ 
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleCathyFood ? 'visible' : 'hidden'}}>
            <p id='cathy_food_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyFood('cathy_food_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason" 
              secondary="City Emoji Sequence" />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonCity ? 'visible' : 'hidden'}}>
               🐁🐄
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleJasonCity ? 'visible' : 'hidden'}}>
            <p id='jason_city_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonCity('jason_city_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="City Emoji Sequence"
            />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyCity ? 'visible' : 'hidden'}}>
                🎒👨‍🍼 
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleCathyCity ? 'visible' : 'hidden'}}>
            <p id='cathy_city_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyCity('cathy_city_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason" 
              secondary="Celebrity Emoji Sequence" />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonCelebrity ? 'visible' : 'hidden'}}>
                🏆⛽
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleJasonCelebrity ? 'visible' : 'hidden'}}>
            <p id='jason_celebrity_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonCelebrity('jason_celebrity_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Celebrity Emoji Sequence"
            />
            <Typography variant='h4' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyCelebrity ? 'visible' : 'hidden'}}>
                🙋🔫🦊
            </Typography>
            <Typography variant='h5' visibility='hidden' style={{visibility: isVisibleCathyCelebrity ? 'visible' : 'hidden'}}>
            <p id='cathy_celebrity_emoji_timer' style={{color:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timer</p>
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyCelebrity('cathy_celebrity_emoji_timer')}>
               Reveal Sequence
            </Button>
          </ListItem>

        </List>
      </Dialog>
    </div>
  );
}
