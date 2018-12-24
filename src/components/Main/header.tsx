import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            marginTop: theme.spacing.unit * 8,
            padding: theme.spacing.unit * 2,
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
        title: {
            marginLeft: theme.spacing.unit * 2,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    });

class Index extends React.Component<WithStyles<typeof styles>> {


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>

                            <Link type="secondary" to="/" >
                                خانه
                               </Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>

                            <Link type="secondary" to="/blog" >
                                وبلاگ
                               </Link>
                        </Typography>

                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            <Link type="secondary" to="/about" >
                                درباره ما
                               </Link>
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.paper}>
                        {this.props.children}
                    </Grid>
                </Grid>


            </div>
        );
    }
}

export default withStyles(styles)(Index);
