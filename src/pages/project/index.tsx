import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Breadcrumb } from '../../components-ui';
import { URI_DASHBARD } from '../../router/route.const';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            // textAlign: 'center',
            // paddingTop: theme.spacing.unit * 20,
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
            <div className={this.props.classes.root}>
                <Breadcrumb data={[
                    {name:"داشبورد",route:URI_DASHBARD},
                    {name:"پروژه ها",route:null}
                ]} />
                <p>Setting</p>
             
            </div>
        );
    }
}

export default withStyles(styles)(Index);
