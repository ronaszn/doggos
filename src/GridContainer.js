import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        width: 200,
        height: 150,
    },
});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24} alignItems={'center'}>
                <Grid item xs={3}>
                    <Paper className={classes.image}>
                        <img className={classes.image} src={'https://i2.wp.com/meowlogy.com/wp-content/uploads/2017/05/Corgi-Puppies-144.jpg?fit=632%2C720&ssl=1'}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
