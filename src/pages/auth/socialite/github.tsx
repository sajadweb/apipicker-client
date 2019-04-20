import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
const styles = (theme: Theme) =>
    createStyles({
    });


interface IProps extends WithStyles<typeof styles> {
    onLogin: () => void
    onChange: (e: any) => void
    match: any
    data: {
        username: string
        password: string
    }
    error: {
        username: string
        password: string
    }
}

import { Mutation } from 'react-apollo';
import { SOCIAL_MUTATION, redirectTo, CLIENT_URI, AuthSave } from '../../../common';
import { URI_USER } from '../../../router/route.const';

class Index extends React.Component<IProps> {

    //TODO give token from router
    componentWillMount() {
        const token = this.props.match.params.token;
        if(localStorage.getItem("token")){
            redirectTo(CLIENT_URI+URI_USER);
        }

    }
    __call = (registerCall: any) => async () => {
        const data = await registerCall();
        if (data) {
            if (data.data.social) {
                AuthSave(data.data.social.user,data.data.social.auth_token)
                redirectTo(CLIENT_URI+URI_USER);
            }
        }
        debugger;
        return null;
    }
    render() {
        const { classes } = this.props;

        return (
            <Mutation mutation={SOCIAL_MUTATION} variables={{
                token: this.props.match.params.token,
                provider: "github"
            }}>
                {(registerCall, { loading, error }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <h1>ERROR</h1>;
                    this.__call(registerCall)();

                    return (<React.Fragment>
                        <br />
                        <br />
                        <br />
                        TODO await for login
                    </React.Fragment>);
                }}
            </Mutation>

        );

    }
}

export default withStyles(styles)(Index);
