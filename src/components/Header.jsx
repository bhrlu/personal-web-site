import React from 'react';
import { AppBar, Grid, Link, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 3),
    padding: theme.spacing(0),
  },
  links: {
    padding: theme.spacing(0, 0, 0, 18),
  },
  link: {
    fontSize: 16,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = () => {
  const classes = useStyle();
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar className={classes.root}>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={3} container justifyContent='center' alignItems='center'>
              <Typography variant='h4'>Amir mahdi</Typography>
            </Grid>
            <Grid className={classes.links} item xs={9} container justifyContent='space-evenly' alignItems='center'>
              <Link className={classes.link}>Home</Link>
              <Link className={classes.link}>About</Link>
              <Link className={classes.link}>Resume</Link>
              <Link className={classes.link}>Skills</Link>
              <Link className={classes.link}>Contact</Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
