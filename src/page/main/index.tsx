import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 1,
        },
        tabsRoot: {
            borderBottom: '1px solid #e8e8e8',
        },
        tabsIndicator: {
            backgroundColor: '#1890ff',
        },
        tabRoot: {
            textTransform: 'initial',
            minWidth: 72,
            fontWeight: theme.typography.fontWeightRegular,
            marginRight: theme.spacing.unit * 4,
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:hover': {
                color: '#40a9ff',
                opacity: 1,
            },
            '&$tabSelected': {
                color: '#1890ff',
                fontWeight: theme.typography.fontWeightMedium,
            },
            '&:focus': {
                color: '#40a9ff',
            },
        },
        tabSelected: {},
        typography: {
            padding: theme.spacing.unit * 3,
        },
    });

type State = {
    open: boolean;
    value: number;
};

class Index extends React.Component<WithStyles<typeof styles>, State> {
    state = {
        open: false,
        value: 0,
    };
    handleChange = (event:  React.ChangeEvent<{}>, value: number) => {
        this.setState({ value });
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
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={this.props.classes.root}>
                <Typography className={classes.typography}>دیگه نیاز نیست همه api روبنویسی</Typography>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                >
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="داکیومنت"
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="مثال"
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="اجرا"
                    />
                </Tabs>
                
            </div>
        );
    }
}

export default withStyles(styles)(Index);
