import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import QuestionDialogSean from './QuestionDialogSean';
import QuestionDialogJason from './QuestionDialogJason';
import QuestionDialogCathy from './QuestionDialogCathy';
import QuestionDialogNidhi from './QuestionDialogNidhi';
import QuestionDialogCharan from './QuestionDialogCharan';
import QuestionDialogGaurav from './QuestionDialogGaurav';
import QuestionDialogBharath from './QuestionDialogBharath';
import QuestionDialogSailaja from './QuestionDialogSailaja';
import QuestionDialogAnu from './QuestionDialogAnu';
import NameThatEmoji from './NameThatEmoji';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow1() {
  return (
    <React.Fragment>
      <Grid item xs>
        <Item><QuestionDialogSean/></Item>
      </Grid>
      <Grid item xs>
      <Item><QuestionDialogJason/></Item>
      </Grid>
      <Grid item xs>
      <Item><QuestionDialogCathy/></Item>
      </Grid>
    </React.Fragment>
  );
}
function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs>
          <Item><QuestionDialogNidhi/></Item>
        </Grid>
        <Grid item xs>
        <Item><QuestionDialogCharan/></Item>
        </Grid>
        <Grid item xs>
        <Item><QuestionDialogGaurav/></Item>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs>
          <Item><QuestionDialogSailaja/></Item>
        </Grid>
        <Grid item xs>
        <Item><QuestionDialogBharath/></Item>
        </Grid>
        <Grid item xs>
        <Item><QuestionDialogAnu/></Item>
        </Grid>
      </React.Fragment>
    );
  }

export default function BdrsGrid() {
  return (
    <div>
    <Typography variant='h5' color="#000000">
        <Box sx={{fontWeight:'bold'}}>Team - BDRS</Box>
    </Typography>
    {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container>
        <Grid container>
          <FormRow1 />
        </Grid>
        <Grid container>
          <FormRow2 />
        </Grid>
        <Grid container>
          <FormRow3 />
        </Grid>
      </Grid>
    {/* </Box> */}
    <NameThatEmoji/>
    <NameThatEmoji/>
    </div>
  );
}
