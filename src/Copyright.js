import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const styles = theme => ({
  elfooter: {
    width: '100%',
    padding: '10px',
    margin: '0',
    position: 'fixed',
    bottom: '0',
    background: 'rgba(0,0,0,0.8)',
    left: 0,
    color: '#fff',
    boxShadow: '0 0 10px #000'
  }
});

const Copyright = (props) => {
  const { classes } = props;
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.elfooter}>
      {`© ${new Date().getFullYear()}. Revista Construcción y Tecnología en Concreto.`}<br />
      <MuiLink color="inherit" href="https://material-ui.com/">
        www.imcyc.com
      </MuiLink>
    </Typography>
  );
};

export default withStyles(styles)(Copyright);
