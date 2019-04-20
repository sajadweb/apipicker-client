import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import styles from "./auth.style";
import { CenterTab } from '../../../components-ui';

import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';


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
interface IProps extends WithStyles<typeof styles> {
    login: any;
    register: any;
}
class Index extends React.Component<IProps, IState> {
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
    render() {
        const { classes, login, register } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <CenterTab
                            items={
                                [
                                    { component: login, title: "ورود" },
                                    { component: register, title: "ثبت نام" },
                                ]
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper_root} elevation={2}>
                            <Typography variant="h5" component="h3">
                                کاربر گرامی خوش آمدید
        </Typography>
                            <Typography component="p">
                                باورود یا ثبت نام
                                در سایت apipicker.ir
                                شما میتوانید از امکانت رایگان
                                مدیریت api
                                ها برخودار باشید
                            </Typography>

                            <div className={classes.demo}>
                                <FormGroup >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked
                                                value="dense"
                                            />
                                        }
                                        label="ساخت و مدیریت وب سرویس ها سایت خود"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked
                                                value="secondary"
                                            />
                                        }
                                        label="استفاده از وب سرویس های آماده"
                                    />
                                      <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked
                                                value="dense"
                                            />
                                        }
                                        label="ساخت و مدیریت وب سرویس ها سایت خود"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked
                                                value="secondary"
                                            />
                                        }
                                        label="استفاده از وب سرویس های آماده"
                                    />
                                </FormGroup>
                                <Typography component="p">
                                باورود یا ثبت نام
                                در سایت apipicker.ir
                                شما میتوانید از امکانت رایگان
                                مدیریت api
                                ها برخودار باشید
                               
                                باورود یا ثبت نام
                                در سایت apipicker.ir
                                شما میتوانید از امکانت رایگان
                                مدیریت api
                                ها برخودار باشید
                            
                               
                                باورود یا ثبت نام
                                در سایت apipicker.ir
                                شما میتوانید از امکانت رایگان
                                مدیریت api
                                ها برخودار باشید
                            
                               
                                باورود یا ثبت نام
                                در سایت apipicker.ir
                                شما میتوانید از امکانت رایگان
                                مدیریت api
                                ها برخودار باشید
                            
                            </Typography>
                            <Typography component="p">
                                باورود یا ثبت نام
                                در سایت apipicker.ir
                                شما میتوانید از امکانت رایگان
                                مدیریت api
                                ها برخودار باشید
                                باورود یا ثبت نام
                                در سایت apipicker.ir
                                شما میتوانید از امکانت رایگان
                                مدیریت api
                                ها برخودار باشید
                            </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );

    }
}

export default withStyles(styles)(Index);
