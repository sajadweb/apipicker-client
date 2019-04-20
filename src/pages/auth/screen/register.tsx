import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from "./auth.style";
import SocialIcon from "./social";
import { TextField, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

interface IProps extends WithStyles<typeof styles> {
    onLogin: () => void
    onChange: (e: any) => void
    data: {
        first_name: string
        last_name: string
        username: string
        email: string
        password: string
    }
    error: {
        first_name?: Array<string>
        last_name?: Array<string>
        username?: Array<string>
        email?: Array<string>
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
                        {"یا ثبت نام با ایمیل "}
                    </Typography>
                    <Typography component="p">
                        <TextField
                            required
                            id="first_name"
                            label="نام"
                            className={classes.textField}
                            value={this.props.data.first_name}
                            onChange={this.props.onChange}
                            margin="normal"
                            error={this.props.error.first_name ? true : false}
                        />
                        {this.props.error.first_name &&
                            <Typography className={classes.textField} color="error">
                                {this.props.error.first_name}
                            </Typography>
                        }
                        <TextField
                            required
                            id="last_name"
                            label="نام خانوادگی"
                            className={classes.textField}
                            value={this.props.data.last_name}
                            onChange={this.props.onChange}
                            margin="normal"
                            error={this.props.error.last_name ? true : false}
                        />
                        {this.props.error.last_name &&
                            <Typography className={classes.textField} color="error">
                                {this.props.error.last_name.toString()}
                            </Typography>
                        }
                        <TextField
                            required
                            id="username"
                            label="نام کاربری"
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
                            id="email"
                            label="ایمیل"
                            className={classes.textField}
                            value={this.props.data.email}
                            onChange={this.props.onChange}
                            margin="normal"
                            error={this.props.error.email ? true : false}
                        />
                        {this.props.error.email &&
                            <Typography className={classes.textField} color="error">
                                {this.props.error.email.toString()}
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
                        <Button
                            // onClick={this.onLoginUser(loginCall)}
                            onClick={this.props.onLogin}
                            variant="contained"
                            color="inherit" className={classes.button}>
                            {"ثبت نام"}
                        </Button>
                    </Typography>
                </Paper>
            </form>

        );

    }
}

export default withStyles(styles)(Index);
