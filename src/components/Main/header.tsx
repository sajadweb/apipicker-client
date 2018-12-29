import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import styles from "./header.style";

class Index extends React.Component<WithStyles<typeof styles>> {


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <AppBar position="fixed" color="default">
                    {/* <LinearProgress value={3} color="secondary" variant="query" /> */}
                     
                    <Grid container spacing={8} className={classes.header}>
                        <Grid item xs={8}>
                            <ul className={classes.menu}>
                                <li className={classes.li}><a className={classes.lia} href="#home">خانه</a></li>
                                <li className={classes.li}><a className={classes.lia} href="#news">وبلاگ</a></li>
                                <li className={classes.li}><a className={classes.lia} href="#contact">درباره ما</a></li>
                            </ul>
                        </Grid>

                        <Grid item xs={3} style={{ textAlign: "end" }}>
                            <img alt="Logo Apipick لگو apipicker" src="/static/images/logo.svg" className={classes.avatar} />
                        </Grid>
                    </Grid>
                </AppBar>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.continuer}>
                        {this.props.children}
                    </Grid>
                </Grid>

                <div className={classes.footer}>
                    <Grid container className={classes.footer_container}>
                        <Grid item xs>

                            <Typography
                                variant="subtitle1"
                                color="inherit">
                                1397  ©
                                  حق کپی رایت برای این سایت محفوظ ست
                        </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="subtitle1" color="inherit">
                                {'طراحی شده توسط '}
                                <a style={{ color: "#fff" }} href="http://sajadweb.ir">{' سجاد محمدی نژاد'}</a>
                            </Typography>

                        </Grid>

                        <Grid item xs>

                            <Typography
                                variant="subtitle1"
                                color="inherit">

                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
