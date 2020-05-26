import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import Volumen from './volumen';
import ScheduleIcon from '@material-ui/icons/Schedule';

const styles = theme => ({
    elMenuLateral: {
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        boxShadow: '0 0 10px #000'
    },
    imagenLogo: {
        maxWidth: '100%',
        textAlign: 'center',

    },
    imagenLogoIp: {
        maxWidth: '250px',
        padding: '3px',
        paddingBottom: '0'
    },
    fecha: {
        color: '#fff',
        fontWeight: '100',
        fontSize: '1em',
        margin: '0',
        textAlign: 'left',
        padding: '5px',
        borderBottom: '1px solid #000000',
        fontWeight: 'bold'
    },
    icon: {
        fontSize: '1em',
        paddingTop: '0px',
        marginTop: '3px',
        marginRight: '5px',
        position: 'relative',
        float: 'left'
    }
});

var month_name = function (dt) {
    var mlist = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return mlist[dt.getMonth()];
};

const Menulateral = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Container maxWidth="xs" className={classes.elMenuLateral}>
                <h2 className={classes.fecha}><ScheduleIcon className={classes.icon} /> {`${new Date().getDate()} - ${month_name(new Date())} - ${new Date().getFullYear()}`}</h2>
                <div className={classes.imagenLogo}>
                    <img src="/logo.png" className={classes.imagenLogoIp} alt="my image" />
                </div>
                <Volumen month_name={month_name} />
                <Typography component="div" />
            </Container>
        </React.Fragment>
    )
};

export default withStyles(styles)(Menulateral);