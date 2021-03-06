import { useContext } from 'react';

import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import AppBarDrawer from './AppBarDrawer';

import { InfoContext } from '../context/InfoContext';


const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  links: {
    padding: theme.spacing(0, 0, 0, 20),
  },
  link: {
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  linkActive: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  },
  drawerVisibility: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
}));

const AppBarComponent = (props) => {

  const { webSiteTitle } = useContext(InfoContext);

  const classes = useStyle();
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid sx={{ display: { xs: 'flex', md: 'block' }, justifyContent: 'space-between', }} item md={3} xs={12} container justifyContent='flex-end' alignItems='center'>
            <div className={classes.drawerVisibility}>
              <AppBarDrawer props={props} />
            </div>
            <Typography variant='h4'>{webSiteTitle}</Typography>
          </Grid>
          <Grid className={classes.links} item xs={9} container justifyContent='space-between' alignItems='center'>
            <Typography variant='h6' className={`${classes.link} ${props.visibleSection === 'home' ? classes.linkActive : ''}`} onClick={() => props.scrollTo(props.homeRef.current)}>Home</Typography>
            <Typography variant='h6' className={`${classes.link} ${props.visibleSection === 'about' ? classes.linkActive : ''}`} onClick={() => props.scrollTo(props.aboutRef.current)}>About</Typography>
            <Typography variant='h6' className={`${classes.link} ${props.visibleSection === 'resume' ? classes.linkActive : ''}`} onClick={() => props.scrollTo(props.resumeRef.current)}>Resume</Typography>
            <Typography variant='h6' className={`${classes.link} ${props.visibleSection === 'skills' ? classes.linkActive : ''}`} onClick={() => props.scrollTo(props.skillsRef.current)}>Skills</Typography>
            <Typography variant='h6' className={`${classes.link} ${props.visibleSection === 'contact' ? classes.linkActive : ''}`} onClick={() => props.scrollTo(props.contactRef.current)}>Contact</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
