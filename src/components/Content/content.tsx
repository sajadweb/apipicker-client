import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';


const styles = (theme: Theme) =>
    createStyles({
        black: {
            flexGrow: 1,
            minHeight: 400,
            // marginBottom: 10,
            marginTop: 10,
            backgroundColor: theme.palette.grey[300]
        },
        white: {
            flexGrow: 1,
            minHeight: 400,
            // marginBottom: 10,
            marginTop: 10,
            backgroundColor: theme.palette.grey[50]
        },
    });


interface IProps extends WithStyles<typeof styles> {
    theme?: "black" | "white";
};

class Index extends React.PureComponent<IProps> {
    render() {
        return (
            <div className={this.props.classes[this.props.theme ? this.props.theme : "black"]}>
                {this.props.children}

            </div>
        );
    }
}

export default withStyles(styles)(Index);
