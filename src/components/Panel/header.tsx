import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// const styles = (theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//         },
//     });

type State = {
    open: boolean;
};

// class Index extends React.Component<WithStyles<typeof styles>, State> {
//     render() {
//         return (
//             <div className={this.props.classes.root}>
//                 <AppBar position="static" color="default">
//                     <Toolbar>
//                         <Typography variant="h6" color="inherit">
//                             Panel
//                          </Typography>
//                     </Toolbar>
//                 </AppBar>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// export default withStyles(styles)(Index);

import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Grid } from '@material-ui/core';
import { Const } from '../../common';
import { Link } from 'react-router-dom';
import { URI_DASHBARD, URI_PROFILE, URI_PROJECT, URI_SERVICE, URI_SETTING } from '../../router/route.const';

const drawerWidth = 240;
const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing.unit * 7 + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing.unit * 9 + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing.unit * 3,
        },
        avatar: {
            // margin: 10,
            marginLeft: 12,
            marginRight: 20,
            height: '30px',
            width: '60px',
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    });

class MiniDrawer extends React.Component<WithStyles<typeof styles>, State> {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color="primary"
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar color="default" disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            ApiPicker
            </Typography>


                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <img className={classes.avatar} alt="Logo Apipick لگو apipicker"
                            src="/static/images/logo.svg" />
                        <Grid container>
                            <Grid item>
                                <Typography variant="h6" color="inherit">{Const.title} </Typography>
                                <Typography component="p">
                                    {Const.v1}
                                </Typography>
                            </Grid>
                        </Grid>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronRightIcon />
                        </IconButton>

                    </div>
                    <Divider />
                    <List>
                        {[
                            {uri:URI_DASHBARD,text:'داشبورد'},
                            {uri:URI_PROFILE,text:'پروفایل'},
                            {uri:URI_PROJECT,text:'پروژه ها'},
                            {uri:URI_SERVICE,text:'سرویس ها'},
                            {uri:URI_SETTING,text:'تنظیمات '}
                        ].map((item:any, index) => (
                            // <Link to={item.uri}>
                                <ListItem  button component="a"  href={item.uri} key={item.text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>  
                            // </Link>
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

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}

                </main>
            </div>
        );
    }
}



export default withStyles(styles, { withTheme: true })(MiniDrawer);
