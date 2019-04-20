import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from "./auth.style";
import { GithubIcon, GoogleIcon } from '../../../components-ui';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { redirectTo, BACKEND_URI, GITHUB_URI, GOOGLE_URI } from '../../../common';

class Index extends React.Component<WithStyles<typeof styles>> {

    render() {
        const { classes } = this.props;
        return (
            <div style={{ flex: 1, alignContent: "center", alignItems: "center", textAlign: "center" }}>\
             {/* <Typography className={classes.textField} color="secondary">
                    {"ورود یا ثبت نام با شبکه های اجتماعی"}
                </Typography> */}
                
                <Fab onClick={()=>{
                   redirectTo(BACKEND_URI+GITHUB_URI);
                }}  color="default" aria-label="Github" className={classes.fab}>
                    <GithubIcon style={{ width: '60px' }} />
                </Fab>
                <Fab onClick={()=>{
                   redirectTo(BACKEND_URI+GOOGLE_URI);
                }}  color="default" aria-label="Google" className={classes.fab}>
                    <GoogleIcon style={{ width: '50px' }} />
                </Fab>

            </div>
        );

    }
}

export default withStyles(styles)(Index);
