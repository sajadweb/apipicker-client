import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';


import styles from "./page.style";
import { Paper, Typography, Grid } from '@material-ui/core';

type State = {
    open: boolean;
};


interface IProps extends WithStyles<typeof styles> {
    title?: string | Element | Element[];
};

class Index extends React.Component<IProps, State> {
    state = {
        open: false,
    };

    render() {
        const { classes, title } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={1}>
                            {title && <Typography variant="h5" component="h3">
                                {title}
                            </Typography>}
                            <Typography component="p">
                                {this.props.children}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
