import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import amirmahdi from '../assets/image/amirmahdi.png'

const useStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(7, 0),
  },
  name: {
    display: 'flex',
  },
  typo: {
    padding: theme.spacing(0, 0, 0, 8.5)
  },
  image: {
    backgroundImage: `url(${amirmahdi})`,
    height: 800,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

const Header = (props) => {
  const classes = useStyle();

  return (
    <Container className={classes.root} id='home' ref={props.homeRef}>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid className={classes.typo} item container direction='column' justifyContent='center' alignItems='flex-start' xs={6}>
          <Typography gutterBottom variant='h5' color='secondary'>HELLO!</Typography>
          <Grid className={classes.name} item>
            <Typography variant='h2'>I'm </Typography>
            <Typography variant='h2' color='secondary'>Amir mahdi</Typography>
          </Grid>
          <Typography variant='h1' color='secondary'>Baharlou</Typography>
        </Grid>
        <Grid className={classes.image} item container justifyContent='center' alignItems='center' xs={6}>
        </Grid>
      </Grid>

    </Container>
  );
}

export default Header;
