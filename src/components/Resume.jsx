import { useContext } from 'react';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { v4 as uuidv4 } from 'uuid';

import { InfoContext } from '../context/InfoContext';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  title: {
    padding: theme.spacing(0, 0, 2, 0),
  },
  cardContent: {
    margin: theme.spacing(3),
    minHeight: 275,
  },
  dateCard: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(1, 0, 1, 2),
  },
  titleCard: {
    padding: theme.spacing(0, 0, 1, 2)
  },
  description: {
    opacity: 0.6,
    padding: theme.spacing(1, 0, 1, 2),
  },
}));

const Resume = (props) => {

  const {resume} = useContext(InfoContext);

  const classes = useStyle();
  return (
    <Grid id='resume' ref={props.resumeRef} className={classes.root} container direction='column' justifyContent='center' alignItems='center' >
      <Typography className={classes.title} variant='h2'>Resume</Typography>
      <Grid container direction='row' justifyContent='flex-start' alignItems='center' >
        {resume.map((item) => (
          <Grid key={uuidv4()} item sm={6} >
            <Card className={classes.cardContent}>
              <CardContent>
                <Typography className={classes.dateCard} variant='h3'>{item.date}</Typography>
                <Typography className={classes.titleCard} variant='h4'>{item.title}</Typography>
                <Typography className={classes.description} variant='h6'>{item.title2}</Typography>
                <Typography className={classes.description} >{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Resume;
