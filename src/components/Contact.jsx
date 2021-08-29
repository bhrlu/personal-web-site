import { Container, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
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

const Contact = (props) => {
  const classes = useStyle();
  return (
    <Container disableGutters id='contact' ref={props.contactRef} className={classes.root} >
      <Grid className={classes.root} container justifyContent='center' alignItems='center'>
        <Typography variant='h3' className={classes.title}>Contact Me</Typography>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid container direction='column' justifyContent='center' alignItems='center' item md={4}>
            <LocalPhoneIcon color='secondary' className={classes.icons} fontSize='large' />
            <Typography variant='h5'>Phone</Typography>
            <Link className={classes.links}>+98 910 950 5714</Link>
          </Grid>
          <Grid container direction='column' justifyContent='center' alignItems='center' item md={4}>
            <EmailIcon color='secondary' className={classes.icons} fontSize='large' />
            <Typography variant='h5'>Email</Typography>
            <Link className={classes.links}>amirmahdibaharlou@gamil.com</Link>
          </Grid>
          <Grid container direction='column' justifyContent='center' alignItems='center' item md={4}>
            <WebIcon color='secondary' className={classes.icons} fontSize='large' />
            <Typography variant='h5'>WebSite</Typography>
            <Link className={classes.links}>bhrlu.ir</Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
