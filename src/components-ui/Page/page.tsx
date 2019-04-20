import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from "./page.style";
import { Paper, Typography, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
type State = {
    open: boolean;
};

import history from '../../router/history';

interface IProps extends WithStyles<typeof styles> {
    title?: string | Element | Element[];
    fullscreen?: boolean;

};
function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}

class Index extends React.Component<IProps, State> {
    state = {
        open: true,
    };

    handleClose = () => {
        if (history.goBack) {
            history.goBack();
        } else {
            history.push('/')
        }
    };
    render() {
        const { classes, title, fullscreen } = this.props;
        if (fullscreen) {
            return (
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar color="default" className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>

                            {title && <Typography variant="h6" color="inherit" className={classes.flex}>
                                {title}
                            </Typography>}
                        </Toolbar>
                    </AppBar>
                    {/* <Grid container spacing={24}> */}
                        {/* <Grid item xs={12}> */}
                           
                                {this.props.children}
                          
                        {/* </Grid> */}
                    {/* </Grid> */}
                </Dialog>
            )
        }
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
