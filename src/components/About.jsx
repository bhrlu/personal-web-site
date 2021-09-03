import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import amirmahdi from '../assets/image/amirmahdi.png'

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  about: {
    maxWidth: '90%',
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
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    [theme.breakpoints.down('md')]: {
      height: 475,
    },
  },
}));
const About = (props) => {
  const classes = useStyle();
  return (
    <Grid id='about' ref={props.aboutRef} className={classes.root} container justifyContent='center' alignItems='center'>
      <Grid sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.imageGrid} container justifyContent='center' alignItems='center' item md={6} sm={6} />
      <Grid sx={{ pl:{ xs: 3} }} container direction='column' justifyContent='center' alignItems='flex-start' item sm={6} md={6}>
        <Grid item xs={6}>
          <Typography variant='h2'>About Me</Typography>
          <Typography className={classes.about} paragraph>I'm a young boy who has been interested in programming since early childhood; I'm not afraid to take and face any new challenge and like to experience new things.</Typography>
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={3.5}>
            <Typography variant='h6' className={classes.descriptionsTitle}>Name:</Typography>
            <Typography variant='h6' className={classes.descriptionsTitle}>Date of brith:</Typography>
            <Typography variant='h6' className={classes.descriptionsTitle}>Email:</Typography>
            <Typography variant='h6' className={classes.descriptionsTitle}>Phone:</Typography>
          </Grid>
          <Grid item xs={8.5}>
            <Typography variant='h6' className={classes.descriptions}>Amirmahdi Baharlou</Typography>
            <Typography variant='h6' className={classes.descriptions}>November 18, 1999</Typography>
            <Typography variant='h6' className={classes.descriptions}>amirmahdibaharlou@ gmail.com</Typography>
            <Typography variant='h6' className={classes.descriptions}>+98 910 950 5714</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.button} >
          <Button size='large' variant='contained' color='secondary'>DOWNLOAD CV</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
