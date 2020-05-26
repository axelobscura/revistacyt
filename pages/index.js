import React from 'react';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Menulateral from './layout/menulateral';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    maxWidth: '100%',
    height: '100vh',
    background: '#111111',
    background: 'url(https://source.unsplash.com/1600x900/?construction) no-repeat center center fixed',
    backgroundSize: 'cover'
  }
});

const Index = (props) => {
  const { classes } = props;
  return (
    <Container color="text.primary" className={classes.root}>
      <Menulateral />
      <Box my={0} p={5}>

        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withStyles(styles)(Index);
