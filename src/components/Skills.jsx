import { useContext } from 'react';

import { Grid, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { v1 as uuidv1 } from 'uuid';

import { InfoContext } from '../context/InfoContext';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  title: {
    padding: theme.spacing(0, 0, 1, 0),
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  linearProgress: {
    padding: 4,
  },
  linearProgressValue: {
    padding: theme.spacing(0, 1)
  },
}));

const Skills = (props) => {

  const {skills} = useContext(InfoContext);

  const classes = useStyle();
  return (
    <Grid id='skills' ref={props.skillsRef} className={classes.root} container direction='column' justifyContent='center' alignItems='center' >
      <Typography className={classes.title} variant='h2'>My Skills</Typography>
      <Grid container direction='row' justifyContent='flex-start' alignItems='center' >
        {skills.map(item => (
          <Grid key={uuidv1()} className={classes.cardContent} item sm={6} xs={10} >
            <Typography className={classes.title} variant='h4'>{item.skill}</Typography>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={11}>
                <LinearProgress className={classes.linearProgress} color='secondary' value={item.persent} variant="determinate" />
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.linearProgressValue} variant='h6'>{item.persent}%</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Skills;
