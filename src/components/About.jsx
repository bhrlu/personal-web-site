import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import amirmahdi from '../assets/image/amirmahdi.png'

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  image: {
    maxWidth: '50%',
    objectFit: 'cover'
  },
  about: {
    maxWidth: '80%',
    padding: theme.spacing(2, 0),
    opacity: 0.7
  },
  descriptionsTitle: {
    padding: theme.spacing(0, 0, 3, 0),
  },
  descriptions: {
    padding: theme.spacing(0, 0, 3, 0),
    opacity: 0.7
  },
  button: {
    padding: theme.spacing(5, 0, 0, 0),
  },
  imageGrid: {
    backgroundImage: `url(${amirmahdi})`,
    height: 500,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
}));
const About = (props) => {
  const classes = useStyle();
  return (
    <Container id='about' ref={props.aboutRef} className={classes.root}>
      <Grid  container justifyContent='center' alignItems='flex-start'>
        <Grid className={classes.imageGrid} container justifyContent='center' alignItems='center' item xs={6} />
        <Grid container direction='column' justifyContent='center' alignItems='flex-start' item xs={6}>
          <Grid item xs={6}>
            <Typography variant='h2'>About Me</Typography>
            <Typography className={classes.about} paragraph>I'm a young boy who has been interested in programming since early childhood; I'm not afraid to take and face any new challenge and like to experience new things.</Typography>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={3}>
              <Typography variant='h6' className={classes.descriptionsTitle}>Name :</Typography>
              <Typography variant='h6' className={classes.descriptionsTitle}>Date of brith :</Typography>
              <Typography variant='h6' className={classes.descriptionsTitle}>Email :</Typography>
              <Typography variant='h6' className={classes.descriptionsTitle}>Phone :</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant='h6' className={classes.descriptions}>Amir mahdi Baharlou</Typography>
              <Typography variant='h6' className={classes.descriptions}>November 18, 1999</Typography>
              <Typography variant='h6' className={classes.descriptions}>amirmahdibaharlou@gmail.com</Typography>
              <Typography variant='h6' className={classes.descriptions}>+98 910 950 5714</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.button} >
            <Button size='large' variant='contained' color='secondary'>DOWNLOAD CV</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
