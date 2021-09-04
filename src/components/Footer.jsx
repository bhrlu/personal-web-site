
import { useContext } from 'react';

import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { InfoContext } from '../context/InfoContext';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  about: {
    padding: theme.spacing(2, 0, 0, 0),
    opacity: 0.7,
  },
  grid: {
    padding: theme.spacing(2.5, 0)
  },
  links: {
    maxWidth: 85,
  },
  link: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  socialIcons: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '50%',
    boxSizing: 'content-box',
    padding: theme.spacing(0.5),
    margin: theme.spacing(1),
  },
}));

const Footer = (props) => {

  const { info } = useContext(InfoContext);

  const classes = useStyle();
  return (
    <Grid className={classes.root} container justifyContent='space-between' alignItems='flex-start'>
      <Grid className={classes.grid} container direction='column' justifyContent='center' alignItems='center' item md={4} >
        <Typography variant='h5'>About</Typography>
        <Typography variant='h6' className={classes.about}>{info.introduce}</Typography>
      </Grid>
      <Grid className={classes.grid} container direction='column' justifyContent='center' alignItems='center' item md={4} >
        <Typography variant='h5'>Links</Typography>
        <Grid className={classes.links} container direction='column' justifyContent='center' alignItems='flex-start'>
          <Link className={`${classes.about} ${classes.link}`} onClick={() => props.scrollTo(props.homeRef.current)}><ArrowForwardIcon className={classes.icons} /> Home</Link>
          <Link className={`${classes.about} ${classes.link}`} onClick={() => props.scrollTo(props.aboutRef.current)}><ArrowForwardIcon className={classes.icons} /> About</Link>
          <Link className={`${classes.about} ${classes.link}`} onClick={() => props.scrollTo(props.resumeRef.current)}><ArrowForwardIcon className={classes.icons} /> Resume</Link>
          <Link className={`${classes.about} ${classes.link}`} onClick={() => props.scrollTo(props.skillsRef.current)}><ArrowForwardIcon className={classes.icons} /> Skills</Link>
          <Link className={`${classes.about} ${classes.link}`} onClick={() => props.scrollTo(props.contactRef.current)}><ArrowForwardIcon className={classes.icons} /> Contact</Link>
        </Grid>
      </Grid>
      <Grid className={classes.grid} container direction='column' justifyContent='center' alignItems='center' item md={4} >
        <Typography variant='h5'>Have a Questions?</Typography>
        <Link href={`tel:${info.phone}`} className={`${classes.about} ${classes.link} `}><PhoneIcon className={classes.icons} />{info.phone}</Link>
        <Link href={`mailto:${info.email}`} className={`${classes.about} ${classes.link}`}><EmailIcon className={classes.icons} />{info.email}</Link>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Link href={info.telegram} className={`${classes.about} ${classes.link}`} >
            <TelegramIcon fontSize='large' className={classes.socialIcons} />
          </Link>
          <Link href={info.gitHub} className={`${classes.about} ${classes.link}`}>
            <GitHubIcon fontSize='large' className={classes.socialIcons} />
          </Link>
          <Link href={info.linkedIn} className={`${classes.about} ${classes.link}`}>
            <LinkedInIcon fontSize='large' className={classes.socialIcons} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
