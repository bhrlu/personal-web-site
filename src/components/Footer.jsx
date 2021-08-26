import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  about: {
    padding: theme.spacing(2, 0, 0, 0),
    maxWidth: '65%',
    opacity: 0.7,
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

const Footer = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.root} container justifyContent='space-between' alignItems='flex-start'>
      <Grid container direction='column' justifyContent='center' alignItems='center' item xs={4} >
        <Typography variant='h5'>About</Typography>
        <Typography variant='h6' className={classes.about}>I'm a young boy who has been interested in programming since early childhood;
          I'm not afraid to take and face any new challenge and like to experience new things.</Typography>
      </Grid>
      <Grid container direction='column' justifyContent='center' alignItems='center' item xs={4} >
        <Typography variant='h5'>Links</Typography>
        <Grid className={classes.links} container direction='column' justifyContent='center' alignItems='flex-start'>
          <Link className={`${classes.about} ${classes.link}`}><ArrowForwardIcon className={classes.icons} /> Home</Link>
          <Link className={`${classes.about} ${classes.link}`}><ArrowForwardIcon className={classes.icons} /> About</Link>
          <Link className={`${classes.about} ${classes.link}`}><ArrowForwardIcon className={classes.icons} /> Resume</Link>
          <Link className={`${classes.about} ${classes.link}`}><ArrowForwardIcon className={classes.icons} /> Skills</Link>
          <Link className={`${classes.about} ${classes.link}`}><ArrowForwardIcon className={classes.icons} /> Contact</Link>
        </Grid>
      </Grid>
      <Grid container direction='column' justifyContent='center' alignItems='center' item xs={4} >
        <Typography variant='h5'>Have a Questions?</Typography>
        <Link className={`${classes.about} ${classes.link} `}><PhoneIcon className={classes.icons} /> +98 910 950 5714</Link>
        <Link className={`${classes.about} ${classes.link}`}><EmailIcon className={classes.icons} /> amirmahdibaharlou@gamil.com</Link>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Link className={`${classes.about} ${classes.link}`} >
            <TelegramIcon fontSize='large' className={classes.socialIcons} />
          </Link>
          <Link className={`${classes.about} ${classes.link}`}>
            <InstagramIcon fontSize='large' className={classes.socialIcons} />
          </Link>
          <Link className={`${classes.about} ${classes.link}`}>
            <LinkedInIcon fontSize='large' className={classes.socialIcons} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
