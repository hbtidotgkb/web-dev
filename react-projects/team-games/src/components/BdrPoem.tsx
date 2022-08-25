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
        BDR Poem
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
              Team Poem
            </Typography>
          </Toolbar>
        </AppBar>
            <Typography variant='h5'>
            <p style={{color:'blue'}}>&nbsp;&nbsp;We can't forget the day when we became a part of Dun & Bradstreet;</p>
            <p style={{color:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We really enjoy to be a part of Mr. Sean's BDRS fleet;</p>
            <p style={{color:'blue'}}>&nbsp;&nbsp;We all feel comfortable in the mentorship of Jason, our talented team architect technically so complete;</p>
            <p style={{color:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have a trio of Team-QA led by Cathy, she's cool and she clarifies question in repeat;</p>
            <p style={{color:'blue'}}>&nbsp;&nbsp;QA Trio has SriCharan, he's hard working and he loves to remain discrete;</p>
            <p style={{color:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next we have Sri, she's quite curious and daily discussions with her is a treat</p>
            <p style={{color:'blue'}}>&nbsp;&nbsp;We were recently joined by Sailaja, she's a quick learner but in group she loves to be on the backseat;</p>
            <p style={{color:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bharath is RPA member but his achievements in Devops is another major feat;</p>
            <p style={{color:'blue'}}>&nbsp;&nbsp;We are still discovering Anu, for now she is soft spoken and keeps her work tidy and neat;</p>
            <p style={{color:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We can't keep our POs aside as they are the first one in stand-up to greet;</p>
            <p style={{color:'blue'}}>&nbsp;&nbsp;Lastly, I would like to thank all members for building this team simply unique and elite;</p>
            </Typography>
      </Dialog>
    </div>
  );
}
