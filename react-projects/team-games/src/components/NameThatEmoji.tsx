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

  //Brand
  const revealEmojiJasonBrand = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleJasonBrand(current => !current);
  };

  const revealEmojiCathyBrand = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleCathyBrand(current => !current);
  };

  //Movie
  const revealEmojiJasonMovie = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleJasonMovie(current => !current);
  };

  const revealEmojiCathyMovie = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleCathyMovie(current => !current);
  };

  //Food
  const revealEmojiJasonFood = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleJasonFood(current => !current);
  };

  const revealEmojiCathyFood = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleCathyFood(current => !current);
  };

  //City
  const revealEmojiJasonCity = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleJasonCity(current => !current);
  };

  const revealEmojiCathyCity = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleCathyCity(current => !current);
  };

  //Celebrity
  const revealEmojiJasonCelebrity = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleJasonCelebrity(current => !current);
  };

  const revealEmojiCathyCelebrity = (id: string) => {
    const el = document.getElementById(id);
    setIsVisibleCathyCelebrity(current => !current);
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
              Name That Emoji
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Team Jason" secondary="Brand Emoji Sequence" />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonBrand ? 'visible' : 'hidden'}}>
               Brand Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonBrand('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Brand Emoji Sequence"
            />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyBrand ? 'visible' : 'hidden'}}>
               Brand Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyBrand('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>

          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason"
              secondary="Movie Emoji Sequence" />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonMovie ? 'visible' : 'hidden'}}>
               Movie Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonMovie('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Movie Emoji Sequence"
            />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyMovie ? 'visible' : 'hidden'}}>
               Movie Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyMovie('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason" 
              secondary="Food Emoji Sequence" />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonFood ? 'visible' : 'hidden'}}>
               Food Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonFood('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Food Emoji Sequence"
            />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyFood ? 'visible' : 'hidden'}}>
               Food Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyFood('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason" 
              secondary="City Emoji Sequence" />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonCity ? 'visible' : 'hidden'}}>
               City Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonCity('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="City Emoji Sequence"
            />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyCity ? 'visible' : 'hidden'}}>
               City Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyCity('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <hr></hr>
          <ListItem button>
            <ListItemText 
              primary="Team Jason" 
              secondary="Celebrity Emoji Sequence" />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleJasonCelebrity ? 'visible' : 'hidden'}}>
               Celebrity Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiJasonCelebrity('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Team Cathy"
              secondary="Celebrity Emoji Sequence"
            />
            <Typography variant='h5' visibility='hidden' id='jason_brand_emoji' style={{visibility: isVisibleCathyCelebrity ? 'visible' : 'hidden'}}>
               Celebrity Q-1 😀
            </Typography>
            <Typography variant='h5'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <Button variant="outlined" size="large" onClick={()=>revealEmojiCathyCelebrity('jason_brand_emoji')}>
               Reveal Sequence
            </Button>
          </ListItem>

        </List>
      </Dialog>
    </div>
  );
}
