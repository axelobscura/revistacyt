import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '5px',
        borderRadius: '0',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: '10px',
        background: '#111',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    elMenuLateral: {
        width: '100%',
        padding: '0'
    },
    icon: {
        fontSize: '1.2em',
        paddingTop: '0px',
        marginTop: '3px',
        position: 'relative',
        float: 'left'
    }
});

const Volumen = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Container maxWidth="xs" className={classes.elMenuLateral} mb={3}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><CollectionsBookmarkIcon className={classes.icon} /> VOLUMEN 9</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><CollectionsBookmarkIcon className={classes.icon} /> NÚMERO 12</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><CollectionsBookmarkIcon className={classes.icon} /> {`${props.month_name(new Date())} ${new Date().getFullYear()}`}</Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
};

export default withStyles(styles)(Volumen);