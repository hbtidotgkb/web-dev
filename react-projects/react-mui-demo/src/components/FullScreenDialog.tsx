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
import nidhi from '../img/nidhi.jpg'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        A Poem Only for You
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
              Close
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
         {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>  */}
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item><Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
        <br></br>
        Enjoy the day with candles on your cake;<br></br>
Sing a song and make the dance floor to quake;<br></br>
<br></br>
Your heart has purity no less than that of a snowflake;<br></br>
Your eyes are a reflection of shining water in a lake;<br></br>
<br></br>
You have a smile that's something impossible to fake;<br></br>
You are your best so never change for other's sake;<br></br>
<br></br>
Knowing you virtually is my life's biggest take;<br></br>
I'm desperately looking forward for our first hand shake;<br></br>
<br></br>
I hope you live for 100 years healthy & awake;<br></br>
Stay motivated & strong with the decisions that you make;<br></br>
<br></br>
Here I stop myself and apply a disc brake;<br></br>
Your friends may be hungry so blow the candles and cut the cake!<br></br>
<br></br>
Wishing you a very Happy Birthday, Enjoy the day with candles on your cake.
            </Typography></Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <img src={nidhi}  />
          </Item>
        </Grid>
      </Grid>
    </Box>
      </Dialog>
    </div>
  );
}
