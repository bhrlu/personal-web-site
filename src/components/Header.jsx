import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import amirmahdi from '../assets/image/amirmahdi.png'

const useStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 3, 0),
    height: 800,
  },
  name: {
    display: 'flex',
  },
  typo: {
    padding: theme.spacing(0, 0, 0, 8.5),
  },
  image: {
    backgroundImage: `url(${amirmahdi})`,
    height: 800,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    [theme.breakpoints.down('md')]: {
      height: '70%',
      backgroundSize: '70%',
      padding: theme.spacing(3)
    },
  },
  responsiveTitle: {
    [theme.breakpoints.up('md')]: {
      visibility: 'hidden',
    },
  },
}));

const Header = (props) => {
  const classes = useStyle();

  return (
    <Grid className={classes.root} id='home' ref={props.homeRef} container justifyContent='center' alignItems='center'>
      <Grid sx={{ display: { xs: 'none', md: 'block' } }} className={classes.typo} item container direction='column' justifyContent='center' alignItems='flex-start'  md={6}>
        <Typography gutterBottom variant='h5' color='secondary'>HELLO!</Typography>
        <Grid className={classes.name} item>
          <Typography variant='h2'>I'm </Typography>
          <Typography variant='h2' color='secondary'>Amir mahdi</Typography>
        </Grid>
        <Typography variant='h1' color='secondary'>Baharlou</Typography>
      </Grid>
      <Grid className={classes.image} item container justifyContent='center' alignItems='center' md={6}>
        <Grid className={classes.responsiveTitle} item container justifyContent='center' alignItems='flex-start' direction='column'>
          <Typography gutterBottom variant='h5' color='secondary'>HELLO!</Typography>
          <Typography variant='h2'>I'm </Typography>
          <Typography variant='h2' color='secondary'>Amir mahdi</Typography>
          <Typography variant='h1' color='secondary'>Baharlou</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
