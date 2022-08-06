import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import dp_sean from '../images/dp/dp_sean.png';
import QuestionDialog_Sean from './QuestionDialog_Sean';
import QuestionDialog_Jason from './QuestionDialog_Jason';
import QuestionDialog_Cathy from './QuestionDialog_Cathy';
import QuestionDialog_Nidhi from './QuestionDialog_Nidhi';
import QuestionDialog_Charan from './QuestionDialog_Charan';
import QuestionDialog_Gaurav from './QuestionDialog_Gaurav';
import QuestionDialog_Bharath from './QuestionDialog_Bharath';

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
        <Item><QuestionDialog_Sean/></Item>
      </Grid>
      <Grid item >
      <Item><QuestionDialog_Jason/></Item>
      </Grid>
      <Grid item >
      <Item><QuestionDialog_Cathy/></Item>
      </Grid>
    </React.Fragment>
  );
}
function FormRow2() {
    return (
      <React.Fragment>
        <Grid item>
          <Item><QuestionDialog_Nidhi/></Item>
        </Grid>
        <Grid item >
        <Item><QuestionDialog_Charan/></Item>
        </Grid>
        <Grid item >
        <Item><QuestionDialog_Gaurav/></Item>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item>
          <Item><img src={dp_sean} className="Bdrs-Img"/></Item>
        </Grid>
        <Grid item >
        <Item><QuestionDialog_Bharath/></Item>
        </Grid>
        <Grid item >
        <Item><img src={dp_sean} className="Bdrs-Img"/></Item>
        </Grid>
      </React.Fragment>
    );
  }


export default function BdrsGrid() {
  return (
    <div>
    <Typography>
        Team - BDRS
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
