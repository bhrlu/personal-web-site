import { Container, Grid, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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

  const classes = useStyle();
  return (
    <Container disableGutters id='skills' ref={props.skillsRef} className={classes.root}>
      <Grid container direction='column' justifyContent='center' alignItems='center' >
        <Typography className={classes.title} variant='h2'>My Skills</Typography>
        <Grid container direction='row' justifyContent='flex-start' alignItems='center' >
          <Grid className={classes.cardContent} item sm={6} xs={10} >
            <Typography className={classes.title} variant='h4'>React.js</Typography>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={11}>
                <LinearProgress className={classes.linearProgress} color='secondary' value={50} variant="determinate" />
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.linearProgressValue} variant='h6'>50%</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.cardContent} item sm={6} xs={10} >
            <Typography className={classes.title} variant='h4'>JavaScript</Typography>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={11}>
                <LinearProgress className={classes.linearProgress} color='secondary' value={50} variant="determinate" />
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.linearProgressValue} variant='h6'>50%</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.cardContent} item sm={6} xs={10} >
            <Typography className={classes.title} variant='h4'>JavaScript</Typography>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={11}>
                <LinearProgress className={classes.linearProgress} color='secondary' value={50} variant="determinate" />
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.linearProgressValue} variant='h6'>50%</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.cardContent} item sm={6} xs={10}>
            <Typography className={classes.title} variant='h4'>JavaScript</Typography>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={11}>
                <LinearProgress className={classes.linearProgress} color='secondary' value={50} variant="determinate" />
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.linearProgressValue} variant='h6'>50%</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.cardContent} item sm={6} xs={10} >
            <Typography className={classes.title} variant='h4'>JavaScript</Typography>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={11}>
                <LinearProgress className={classes.linearProgress} color='secondary' value={50} variant="determinate" />
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.linearProgressValue} variant='h6'>50%</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Skills;
