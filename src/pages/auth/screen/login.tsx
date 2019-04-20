import * as React from 'react';
import * as Joi from 'joi';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from "./auth.style";
import SocialIcon from "./social";

import { TextField, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ButtonProgress } from '../../../components';

interface IProps extends WithStyles<typeof styles> {
    onLogin: () => void
    onChange: (e: any) => void
    data: {
        username: string
        password: string
    }
    error: {
        username?: Array<string>
        password?: Array<string>
    }
}
class Index extends React.Component<IProps> {


    render() {
        const { classes } = this.props;
        return (
            <form noValidate autoComplete="on">
                <Paper className={classes.paper} elevation={1}>
                    <SocialIcon />
                    <br />
                    <Typography className={classes.textField} color="secondary">
                    {"یا ورود با ایمیل یا نام کاربری"}
                </Typography>
                    <Typography component="p">
                        <TextField
                            required
                            id="username"
                            label="ایمیل یا نام کاربری"
                            className={classes.textField}
                            value={this.props.data.username}
                            onChange={this.props.onChange}
                            margin="normal"
                            error={this.props.error.username ? true : false}
                        />
                        {this.props.error.username &&
                            <Typography className={classes.textField} color="error">
                                {this.props.error.username.toString()}
                            </Typography>
                        }
                        <TextField
                            required
                            id="password"
                            label="پسورد"
                            className={classes.textField}
                            value={this.props.data.password}
                            onChange={this.props.onChange}
                            error={this.props.error.password ? true : false}
                            margin="normal" />
                        {this.props.error.password &&
                            <Typography className={classes.textField} color="error">
                                {this.props.error.password.toString()}
                            </Typography>
                        }
                        {/* <Button
                            // onClick={this.onLoginUser(loginCall)}
                            onClick={this.props.onLogin}
                            variant="contained"
                            color="default" className={classes.button}>
                            {"ورود"}
                        </Button> */}
                        <ButtonProgress
                          onClick={this.props.onLogin}
                          title="ورود"
                          />
                        <Typography className={classes.textField} color="secondary">
                            {"رمز عبور را فراموش کردم"}
                        </Typography>
                    </Typography>
                </Paper>
            </form>

        );

    }
}

export default withStyles(styles)(Index);
