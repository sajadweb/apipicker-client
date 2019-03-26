import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styles from "./NavBar.style";
interface NavBarProps extends WithStyles<typeof styles> {
    meue?: any;
    toggleLogin: any;
}
interface IState {
    open: boolean;
}

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Paper, Grid } from '@material-ui/core';
import { Const } from '../../common';

class Index extends React.Component<NavBarProps, IState> {
    state = {
        open: false,
    };
    toggleDrawer = (open: boolean) => () => {
        this.setState({
            open: open,
        });
    };
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, toggleLogin } = this.props;
        const { open } = this.state;
        const version = (
            <div className={classes.bottom} >
                <Paper className={classes.paper} elevation={1}>
                    <Grid container>

                        <Grid item> <img alt="Logo Apipick لگو apipicker" src="/static/images/logo.svg" />  </Grid>
                        <Grid item>
                            <Typography variant="h6" color="inherit">{Const.title} </Typography>
                            <Typography component="p">
                                {Const.v1}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
        const sideList = (
            <div className={classes.list}>
                <List>
                    {['خانه', 'درباره ما', 'تماس با ما', 'نمونه کد'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText className={classes.typography} primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </div>
        );
        return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    color="default">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            ApiPicker
                        </Typography>
                        <Button onClick={()=>{toggleLogin(true)}} variant="contained" color="secondary" >{"" + "ورود" + " | " + "ثبت نام"}</Button>
                        <img alt="Logo Apipick لگو apipicker" src="/static/images/logo.svg" className={classes.avatar} />
                        {/* <Button variant="contained" color="primary" >ورود</Button> */}
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                    {version}
                </SwipeableDrawer>
            </div>
        );
        return (
            <div>

                <AppBar position="fixed"
                    color="default" >
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            {"  React & Material-UI Sample Application"}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
