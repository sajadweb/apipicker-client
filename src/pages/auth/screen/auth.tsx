import * as React from 'react';
import * as Joi from 'joi';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from "./auth.style";

import { Query, Mutation } from 'react-apollo';
import { LOGIN_MUTATION, Const } from '../../../common';
import { Notify } from '../../../components-ui';

import { TextField, Button } from '@material-ui/core';
import { GoogleLogin } from '../../../components';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

type IState = {
    errors: {
        email?: any
        password?: any
    }
    value: any
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
    onChangeTab = (event: any, value: any) => {
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
            email: this.state.email,
            password: this.state.password
        };
        const result = Joi.validate(this.state.email, Joi.string().alphanum().min(3).max(30).required());
        if (result.error) {
            this.setState({ message: Const.errors.form.required }, () => {
                this.setState({
                    notify: true, errors: {
                        email: Const.errors.form.email,
                        password: this.state.errors.password,
                    }
                });
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
                
                    <Notify message={this.state.message} open={this.state.notify} handleToggel={() => {
                        this.setState({ notify: false });
                    }} variant="error" />
                    {/* <GoogleLogin /> */}
                    <hr />
                    <Mutation mutation={LOGIN_MUTATION} variables={
                        {
                            username: this.state.email,
                            password: this.state.password,
                        }
                    }>
                        {(loginCall, result) => {
                            // tslint:disable-next-line:no-shadowed-variable
                            const { error, loading } = result;
                            if (error) {
                                loading
                                return error;
                            }
                            if (loading) {
                                return loading;
                            }
                            return (
                                <form noValidate autoComplete="off">
                                    <AppBar
                                        color="default"
                                        position="static">
                                        <Tabs
                                            indicatorColor="secondary"
                                            textColor="default"
                                            value={this.state.value}
                                            onChange={this.onChangeTab}

                                        >
                                            <Tab label="ورود" />
                                            <Tab label="ثبت نام" />
                                        </Tabs>
                                    </AppBar>
                                    {value === 1 && <>
                                        <TextField
                                            required
                                            id="first_name"
                                            label="نام"
                                            className={classes.textField}
                                            value={this.state.email}
                                            onChange={this.handleChange('email')}
                                            margin="normal"
                                            error={this.state.errors.email ? true : false}
                                        />
                                        {this.state.errors.email &&
                                            <Typography className={classes.textField} color="error">
                                                {this.state.errors.email}
                                            </Typography>
                                        }

                                    </>}

                                    <TextField
                                        required
                                        id="email"
                                        label="ایمیل"
                                        className={classes.textField}
                                        value={this.state.email}
                                        onChange={this.handleChange('email')}
                                        margin="normal"
                                        error={this.state.errors.email ? true : false}
                                    />
                                    {this.state.errors.email &&
                                        <Typography className={classes.textField} color="error">
                                            {this.state.errors.email}
                                        </Typography>
                                    }
                                    <TextField
                                        required
                                        id="password"
                                        label="پسورد"
                                        className={classes.textField}
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        margin="normal"

                                    />
                                    {value === 0 && <>
                                        <Button onClick={this.onLoginUser(loginCall)} variant="contained"
                                            color="secondary" className={classes.button}>
                                            ورود
                                     </Button>
                                    </>
                                    }
                                    {value === 1 && <>
                                        <Button onClick={this.onLoginUser(loginCall)} variant="contained"
                                            color="secondary" className={classes.button}>
                                            ثبت نام
                                         </Button>
                                    </>}

                                </form>);
                        }}
                    </Mutation>
 
            </div >
        );
    }
}

export default withStyles(styles)(Index);
