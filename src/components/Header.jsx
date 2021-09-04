import { useContext } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { InfoContext } from '../context/InfoContext';
import imageProfile from '../assets/image/imageProfile.png'

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

  const { info, webSiteTitle } = useContext(InfoContext);
  document.title = webSiteTitle;

  const classes = useStyle();

  return (
    <Grid className={classes.root} id='home' ref={props.homeRef} container justifyContent='center' alignItems='center'>
      <Grid sx={{ display: { xs: 'none', md: 'block' } }} className={classes.typo} item container direction='column' justifyContent='center' alignItems='flex-start' md={6}>
        <Typography gutterBottom variant='h5' color='secondary'>HELLO!</Typography>
        <Grid className={classes.name} item>
          <Typography variant='h2'>I'm </Typography>
          <Typography variant='h2' color='secondary'>{info.name}</Typography>
        </Grid>
        <Typography variant='h1' color='secondary'>{info.family}</Typography>
      </Grid>
      <Grid className={classes.image} sx={{ backgroundImage: `url(${imageProfile})`, }} item container justifyContent='center' alignItems='center' md={6}>
        <Grid className={classes.responsiveTitle} item container justifyContent='center' alignItems='flex-start' direction='column'>
          <Typography gutterBottom variant='h5' color='secondary'>HELLO!</Typography>
          <Typography variant='h2'>I'm </Typography>
          <Typography variant='h2' color='secondary'>{info.name}</Typography>
          <Typography variant='h1' color='secondary'>{info.family}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
