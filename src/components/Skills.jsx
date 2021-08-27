import { Grid, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 10),
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

const Skills = () => {

  const classes = useStyle();
  return (
    <Grid className={classes.root} container direction='column' justifyContent='center' alignItems='center' >
      <Typography className={classes.title} variant='h2'>My Skills</Typography>
      <Grid container direction='row' justifyContent='flex-start' alignItems='center' >
        <Grid className={classes.cardContent} item xs={6} >
          <Typography className={classes.title} variant='h4'>React.js</Typography>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={10}>
              <LinearProgress className={classes.linearProgress} color='secondary' value={50} variant="determinate" />
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.linearProgressValue} variant='h6'>50%</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.cardContent} item xs={6} >
          <Typography className={classes.title} variant='h4'>JavaScript</Typography>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={10}>
              <LinearProgress className={classes.linearProgress} color='secondary' value={50} variant="determinate" />
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.linearProgressValue} variant='h6'>50%</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;
