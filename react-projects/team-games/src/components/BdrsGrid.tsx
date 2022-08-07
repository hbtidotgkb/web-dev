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
      <Grid item>
        <Item><QuestionDialogSean/></Item>
      </Grid>
      <Grid item >
      <Item><QuestionDialogJason/></Item>
      </Grid>
      <Grid item >
      <Item><QuestionDialogCathy/></Item>
      </Grid>
    </React.Fragment>
  );
}
function FormRow2() {
    return (
      <React.Fragment>
        <Grid item>
          <Item><QuestionDialogNidhi/></Item>
        </Grid>
        <Grid item >
        <Item><QuestionDialogCharan/></Item>
        </Grid>
        <Grid item >
        <Item><QuestionDialogGaurav/></Item>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item>
          <Item><QuestionDialogSailaja/></Item>
        </Grid>
        <Grid item >
        <Item><QuestionDialogBharath/></Item>
        </Grid>
        <Grid item >
        <Item><QuestionDialogAnu/></Item>
        </Grid>
      </React.Fragment>
    );
  }


export default function BdrsGrid() {
  return (
    <div>
    <Typography variant='h4' gutterBottom>
        <Box sx={{fontWeight:'bold'}}>Team - BDRS</Box>
    </Typography>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow1 />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow2 />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow3 />
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
