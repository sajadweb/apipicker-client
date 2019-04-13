import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import NotifyContent from './NotifyContent';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const styles = (theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing.unit,
        },
    });
interface IState {
    open: boolean
}
interface IProps extends WithStyles<typeof styles> {
    handleToggel: () => void;
    message?: any;
    open?: boolean;
    variant?: 'success' | 'warning' | 'error' | 'info';
    vertical?: 'top' | 'bottom';
    horizontal?: 'right' | 'left' | 'center';
}
class Index extends React.Component<IProps, IState>{
    state = {
        open: false,
    };
    UNSAFE_componentWillMount() {
        let { open } = this.props;
        if (open) {
            this.handleClick();
        }
    }
    UNSAFE_componentWillReceiveProps(props: IProps) {
        let { open } = props;
        if (open) {
            this.handleClick();
        } else {
            this.handleCloseMy();
        }
    }


    handleClick = () => {
        this.setState({ open: true });
    }
    
    handleCloseMy = () => {
        this.setState({ open: false });
    }

    handleClose = (event: any, reason: any) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    }
    render() {
        const { classes, message, handleToggel, variant, vertical, horizontal } = this.props;
        return (
            <>

                <Snackbar
                    anchorOrigin={{
                        vertical: vertical ? vertical : 'top',
                        horizontal: horizontal ? horizontal : 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onClose={handleToggel}
                >

                    <NotifyContent
                        onClose={handleToggel}
                        variant={variant ? variant : "success"}
                        className={classes.margin}
                        message={message ? message : "This is an error message!"}
                    />
                </Snackbar>

            </>
        );
    };
}

export default withStyles(styles)(Index);