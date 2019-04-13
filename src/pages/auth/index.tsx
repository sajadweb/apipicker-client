import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Page } from '../../components-ui';
import Auth from './screen/auth';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20,
        },
    });

type State = {
    open: boolean;
};

class Index extends React.Component<WithStyles<typeof styles>, State> {
    state = {
        open: false,
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    render() {
        return (
            <Page  fullscreen title="ورود یا ثبت نام">
                <Auth />
            </Page>
        );
    }
}

export default withStyles(styles)(Index);
