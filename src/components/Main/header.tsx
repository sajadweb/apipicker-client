import * as React from 'react';
import * as Joi from 'joi';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from "./header.style";
import { NavBar } from '../NavBar';
import { Auth } from '../Auth';
import { Modal } from '../Modal';
import { Query, Mutation } from 'react-apollo';
import { LOCAL_MODAL_QUERY, TOGGLE_MODAL_MUTATION, LOGIN_MUTATION, Const } from '../../common';


import history from '../../router/history';
import { TextField, Button } from '@material-ui/core';
import { GoogleLogin } from '../Google';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

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
class Index extends React.Component<WithStyles<typeof styles>, IState> {
    state = {
        value: 0,
        message: "تمامی فیلد ها اجباری می باشند",
        errors: {
            email: "",
            password: ""
        },
        notify: false,
        open: true,
        email: "",
        password: ""
    }
    onChangeTab = (event:any, value:any) => {
        this.setState({ value });
      };
    handleClickOpen = (open: boolean) => {
        this.setState({ open: open });
    };
    handleChange = (name: "email" | "password") => (text: any) => {
        if (name === "password")
            this.setState({ password: "" + text.target.value });
        if (name === "email")
            this.setState({ email: "" + text.target.value });
    };
    onLoginUser = (callApi: any) => async () => {
        const schema = {
            email: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().alphanum().min(3).max(30).required(),
            
         };
        
        const value = {
            email:this.state.email,
            password:this.state.password
        };
        const result = Joi.validate(this.state.email, Joi.string().alphanum().min(3).max(30).required());
        if(result.error){
            this.setState({ message:  Const.errors.form.required},()=>{
                this.setState({ notify: true, errors: {
                    email:  Const.errors.form.email,
                    password: this.state.errors.password,
                } });
            });
            return;
        }
        // let data = await callApi();
        // console.log(data);
       
        
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
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
                                  history.push('/auth')
                                // this.setState({ open: open }, () => {
                                //     toggleLogin()
                                // })

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
                                        <Auth />
                                        
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
