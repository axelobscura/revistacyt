import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    elMenuLateral: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        boxShadow: '0 0 10px #000',
        height: '100vh',
        left: '0',
        position: 'fixed'
    },
    imagenLogo: {
        maxWidth: '250px'
    },
});

const Menulateral = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Container maxWidth="xs" className={classes.elMenuLateral}>
                <img src="/logo.png" className={classes.imagenLogo} alt="my image" />
                <Typography component="div" />
            </Container>
        </React.Fragment>
    )
};

export default withStyles(styles)(Menulateral);