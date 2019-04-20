import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Query, Mutation } from 'react-apollo';
import { LOGIN_MUTATION, Const, SIGNUP_MUTATION, Validator, __, AuthSave, redirectTo, CLIENT_URI, TOGGLE_LOADING_HADER_MUTATION } from '../../common';
import { Notify, Page } from '../../components-ui';
import Auth from './screen/auth';
import Login from './screen/login';
import Register from './screen/register';
import { URI_USER } from '../../router/route.const';
import { togelLoading } from '../../components';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20,
        },
    });

interface IState {
    isLoading: boolean;
    open: boolean;
    notify: boolean;
    variant: 'success' | 'warning' | 'error' | 'info';
    message: any;
    login: {
        username: string
        password: string

    };
    register: {
        first_name: string
        last_name: string
        username: string
        email: string
        password: string

    };
    error: {
        login: {
            username?: Array<string>
            password?: Array<string>
        }
        register: {
            first_name?: Array<string>
            last_name?: Array<string>
            username?: Array<string>
            email?: Array<string>
            password?: Array<string>
        }
    }
};

class Index extends React.Component<WithStyles<typeof styles>, IState> {
    state: IState = {
        isLoading: true,
        open: false,
        notify: false,
        variant: "error",
        message: "",
        login: {
            username: "",
            password: ""
        },
        register: {
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
        },
        error: {
            login: {},
            register: {},
        }
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };
    handleToggelNotify = () => {
        this.setState({ notify: false });
    }


    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    __renderLogin = (loadingFunc: any) => {
        return (
            <Mutation mutation={LOGIN_MUTATION} variables={this.state.login}>
                {(loginCall) => {
                    return (<Login
                        data={this.state.login}
                        error={this.state.error.login}
                        onChange={this.__login_change("login")}
                        onLogin={this.__login_save(loginCall, loadingFunc)}
                    />);
                }}
            </Mutation>
        )
    }
    __login_change = (type_form: "login" | "register") => (e: { target: { id: "username" | "password" | "email" | "first_name" | "last_name", value: any } }) => {
        if (type_form == "login") {
            let id: "username" | "password";
            if (e.target.id === "username") {
                id = "username";
            } else {
                id = "password";
            }
            let login = this.state.login;
            login[id] = e.target.value;
            let error = this.state.error;
            error.login = {};
            this.setState({
                error: error,
                login: login
            })
        } else if (type_form == "register") {
            let register = this.state.register;
            register[e.target.id] = e.target.value;
            let error = this.state.error;
            error.register = {};
            this.setState({
                error: error,
                register: register
            })
        }
    }
    __login_save = (callApi: any, togelLoading: any) => async () => {
       await togelLoading();
        const schema = {
            username: "string|min:3|max:195|required",
            password: "string|min:6|max:16|required",

        };
        const value = this.state.login;
        const validator = new Validator(value, schema);
        if (validator.fails()) {
            await togelLoading();
            this.setState({ message: Const.errors.form.required }, () => {
                let error = this.state.error;
                error.login = validator.errors.errors;
                this.setState({
                    variant: "error",
                    error: error,
                    notify: true,
                    message: "اطلاعات وارد شده صحیح نمی باشد"
                });
            });
            return;
        }
        let data = await callApi();
       await togelLoading();
        if (__.has(data, "data.login.user")) {
            if (!__.isEmpty(data.data.login.user)) {
                AuthSave(data.data.login.user, data.data.login.auth_token)
                this.setState({
                    variant: "success",
                    notify: true,
                    message: "ورود باموفقیت انجام شد"
                });
                redirectTo(CLIENT_URI + URI_USER);
                return;
            }
        }
        this.setState({
            variant: "error",
            notify: true,
            message: "اطلاعات وارد شده صحیح نمی باشد" 
        });
    }
    __register_save = (callApi: any, togelLoading: any) => async () => {
        await togelLoading();
        const schema = {
            username: "string|min:3|max:195|required",
            email: "email|min:3|max:195|required",
            first_name: "min:3|max:195|required",
            last_name: "min:3|max:195|required",
            password: "string|min:6|max:16|required",

        };
        const value = this.state.register;
        const validator = new Validator(value, schema);
        if (validator.fails()) {
            await togelLoading();
            this.setState({ message: Const.errors.form.required }, () => {
                let error = this.state.error;
                error.register = validator.errors.errors;
                this.setState({
                    variant: "error",
                    error: error,
                    notify: true,
                    message: "اطلاعات وارد شده صحیح نمی باشد"
                });
            });
            return;
        }
        let data = await callApi();
        await togelLoading();
        if (__.has(data, "data.signup.user")) {
            if (!__.isEmpty(data.data.signup.user)) {
                AuthSave(data.data.signup.user, data.data.signup.auth_token)
                this.setState({
                    variant: "success",
                    notify: true,
                    message: "اطلاعات وارد شده صحیح نمی باشد"
                });
                redirectTo(CLIENT_URI + URI_USER);
                return;
            }
        }
        this.setState({
            variant: "error",
            notify: true,
            message: "اطلاعات وارد شده صحیح نمی باشد"
        });
    }
    __renderRegister = (togelLoading: any) => {
        return (
            <Mutation mutation={SIGNUP_MUTATION} variables={this.state.register}>
                {(registerCall) => {
                    return (<Register
                        data={this.state.register}
                        error={this.state.error.register}
                        onChange={this.__login_change("register")}
                        onLogin={this.__register_save(registerCall, togelLoading)}
                    />);
                }}
            </Mutation>
        )
    }
    render() {
        return (
            <Page fullscreen title="ورود یا ثبت نام">
                <Mutation mutation={TOGGLE_LOADING_HADER_MUTATION} variables={{ isLoading: this.state.isLoading }}>
                    {(loadingFunc) => {
                        return (<React.Fragment>
                            <Auth
                                login={this.__renderLogin(loadingFunc)}
                                register={this.__renderRegister(loadingFunc)}
                            />

                            <Notify
                                message={this.state.message}
                                open={this.state.notify}
                                handleToggel={this.handleToggelNotify}
                                variant={this.state.variant} />
                        </React.Fragment>);
                    }}
                </Mutation>

            </Page>
        );
    }
}

export default withStyles(styles)(Index);
