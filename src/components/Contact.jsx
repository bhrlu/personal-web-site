import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 10),
  },
  title: {
    padding: theme.spacing(0, 0, 3, 0),
  },
  icons: {
    margin: theme.spacing(3),
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(3),
    boxSizing: 'content-box',
  },
  links: {
    fontSize: 16,
    padding: theme.spacing(2, 0)
  },
}));

const Contact = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.root} container justifyContent='center' alignItems='center'>
      <Typography variant='h3' className={classes.title}>Contact Me</Typography>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid container direction='column' justifyContent='center' alignItems='center' item xs={4}>
          <LocalPhoneIcon className={classes.icons} fontSize='large' />
          <Typography variant='h5'>Phone</Typography>
          <Link className={classes.links}>+98 910 9505714</Link>
        </Grid>
        <Grid container direction='column' justifyContent='center' alignItems='center' item xs={4}>
          <EmailIcon className={classes.icons} fontSize='large' />
          <Typography variant='h5'>Email</Typography>
          <Link className={classes.links}>amirmahdibaharlou@gamil.com</Link>
        </Grid>
        <Grid container direction='column' justifyContent='center' alignItems='center' item xs={4}>
          <WebIcon className={classes.icons} fontSize='large' />
          <Typography variant='h5'>WebSite</Typography>
          <Link className={classes.links}>bhrlu.ir</Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
