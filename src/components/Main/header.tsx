import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    });

class Index extends React.Component<WithStyles<typeof styles>> {
  

    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Main
                         </Typography>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(Index);
