import * as React from 'react';
import * as Joi from 'joi';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from "./header.style";
import { NavBar } from '../NavBar';
import history from '../../router/history';
import { LinearProgress } from '..';


type IState = {
    errors: {
        email?: any
        password?:any
    }
    value:  any
    message: String;
    notify: boolean
    open: boolean
    email?: string
    password?: string
}
class Index extends React.Component<WithStyles<typeof styles>> {
  
   
    render() {
        const { classes } = this.props;
      
        return (
            <div className={classes.root}>
                <LinearProgress loading />
                <NavBar toggleLogin={(open: boolean) => {history.push('/auth') }} />
                <Grid container spacing={0}>
                    <Grid item xs={12} >
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
