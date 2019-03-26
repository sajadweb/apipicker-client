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
import { NavBar } from '../NavBar';
import { Modal } from '../Modal';
import { Query, Mutation } from 'react-apollo';
import { LOCAL_MODAL_QUERY, TOGGLE_MODAL_MUTATION } from '../../common';
import { TextField, Button } from '@material-ui/core';
import { GoogleLogin } from '../Google';

class Index extends React.Component<WithStyles<typeof styles>, { open: boolean }> {
    state = {
        open: true
    }
    handleClickOpen = (open: boolean) => {
        this.setState({ open: open });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Mutation mutation={TOGGLE_MODAL_MUTATION} variables={{ isLogin: this.state.open }}>
                    {(toggleLogin, result) => {
                        // tslint:disable-next-line:no-shadowed-variable
                        const { error, loading } = result;
                        if (error) {
                            return null;
                        }
                        if (loading) {
                            return null;
                        }
                        return (<React.Fragment>
                            <NavBar toggleLogin={(open: boolean) => {
                                debugger;
                                this.setState({ open: open }, () => {
                                    toggleLogin()
                                })

                            }} />
                            <Query query={LOCAL_MODAL_QUERY}>
                                {({ data, error, loading }) => {
                                    console.log({ data, error, loading })
                                    if (error) {
                                        return null;
                                    }
                                    if (loading) {
                                        return null;
                                    }
                                    return (<Modal handleToggel={(open: boolean) => {
                                        this.setState({ open: open }, () => {
                                            toggleLogin()
                                        })

                                    }} open={data.isLogin} title="ورود یا ثبت نام">
                                        <GoogleLogin />
                                        <hr />
                                        <form noValidate autoComplete="off">
                                            <TextField
                                                required
                                                id="email"
                                                label="ایمیل"
                                                className={classes.textField}
                                                // value={this.state.name}
                                                // onChange={this.handleChange('email')}
                                                margin="normal"
                                            />

                                            <TextField
                                                required
                                                id="standard-required"
                                                label="پسورد"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                            <Button variant="contained" color="secondary" className={classes.button}>
                                                ورود یا ثبت نام
      </Button>
                                        </form>
                                    </Modal>);
                                }}
                            </Query>
                        </React.Fragment>);
                    }}
                </Mutation>




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
