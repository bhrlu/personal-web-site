import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import amirmahdi from '../assets/image/amirmahdi.png'

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(7, 3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  name: {
    display: 'flex',
  },
  typo: {
    padding: theme.spacing(0, 0, 0, 8.5)
  }
}));

const Header = () => {
  const classes = useStyle();

  return (
    <Grid className={classes.root} container justifyContent='center' alignItems='center'>
      <Grid className={classes.typo} item container direction='column' justifyContent='center' alignItems='flex-start' xs={6}>
        <Typography gutterBottom variant='h5' color='secondary'>HELLO!</Typography>
        <Grid className={classes.name} item>
          <Typography variant='h2'  >I'm </Typography>
          <Typography variant='h2' color='secondary'>Amir mahdi</Typography>
        </Grid>
        <Typography variant='h1' color='secondary'>Baharlou</Typography>
      </Grid>
      <Grid item container justifyContent='center' alignItems='center' xs={6}>
        <img src={amirmahdi} alt='amirmahdi baharlou' />
      </Grid>
    </Grid>
  );
}

export default Header;
