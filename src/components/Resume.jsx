import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 10),
  },
  title: {
    padding: theme.spacing(0, 0, 2, 0),
  },
  cardContent: {
    margin: theme.spacing(3),
  },
  dateCard: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(1, 0, 1, 2),
  },
  titleCard: {
    padding: theme.spacing(0, 0, 1, 2)
  },
  description: {
    opacity: 0.6,
    padding: theme.spacing(1, 0, 1, 2),
  },
}));

const Resume = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.root} container direction='column' justifyContent='center' alignItems='center' >
      <Typography className={classes.title} variant='h2'>Resume</Typography>
      <Grid container direction='row' justifyContent='flex-start' alignItems='center' >
        <Grid item xs={6} >
          <Card className={classes.cardContent}>
            <CardContent>
              <Typography className={classes.dateCard} variant='h3'>2017-2021</Typography>
              <Typography className={classes.titleCard} variant='h4'>Web Developer</Typography>
              <Typography className={classes.description} variant='h6'>bu-ali-sina</Typography>
              <Typography className={classes.description} >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} >
          <Card className={classes.cardContent}>
            <CardContent>
              <Typography className={classes.dateCard} variant='h3'>2017-2021</Typography>
              <Typography className={classes.titleCard} variant='h4'>Web Developer</Typography>
              <Typography className={classes.description} variant='h6'>bu-ali-sina</Typography>
              <Typography className={classes.description} >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Resume;
