import { useState } from 'react';

import { IconButton, Drawer, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles(theme => ({
  link: {
    padding: theme.spacing(1, 5, 1, 2),
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    },
  },
  linkActive: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  },
}));


const AppBarDrawer = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyle();

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer({ ...openDrawer, 'left': open });
  };

  const list = () => {
    return (
      <Grid container direction='column' justifyContent='flex-start' alignItems='flex-start' onKeyDown={toggleDrawer(false)}>
        <Typography variant='h6' className={`${classes.link} ${props.props.visibleSection === 'home' ? classes.linkActive : ''}`} onClick={() => props.props.scrollTo(props.props.homeRef.current)}>Home</Typography>
        <Typography variant='h6' className={`${classes.link} ${props.props.visibleSection === 'about' ? classes.linkActive : ''}`} onClick={() => props.props.scrollTo(props.props.aboutRef.current)}>About</Typography>
        <Typography variant='h6' className={`${classes.link} ${props.props.visibleSection === 'resume' ? classes.linkActive : ''}`} onClick={() => props.props.scrollTo(props.props.resumeRef.current)}>Resume</Typography>
        <Typography variant='h6' className={`${classes.link} ${props.props.visibleSection === 'skills' ? classes.linkActive : ''}`} onClick={() => props.props.scrollTo(props.props.skillsRef.current)}>Skills</Typography>
        <Typography variant='h6' className={`${classes.link} ${props.props.visibleSection === 'contact' ? classes.linkActive : ''}`} onClick={() => props.props.scrollTo(props.props.contactRef.current)}>Contact</Typography>
      </Grid>
    );
  };
  return (
    <>
      <IconButton className={classes.button} onClick={toggleDrawer(true)}>
        <MenuIcon color='secondary' />
      </IconButton>
      <Drawer
        anchor='left'
        open={openDrawer['left']}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default AppBarDrawer;
