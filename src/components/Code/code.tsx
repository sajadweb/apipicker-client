import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import FileCopy from '@material-ui/icons/FileCopy';
import DirectionsIcon from '@material-ui/icons/Directions';
import ReactJson from 'react-json-view';

const styles = (theme: Theme) =>
    createStyles({
        ReactJson: {
            backgroundColor: "rgb(43, 43, 43)",
            padding: '20px',
            textAlign: 'right',
            direction: "rtl",
            height: "200px",
            overflowY: "scroll",
        },
        left: {
            textAlign: 'right',
            direction: "rtl"
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
        paper: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
        },
        input: {
            marginLeft: 8,
            flex: 1,
            textAlign: "left"
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            width: 1,
            height: 28,
            margin: 4,
        },
    });

type State = {
    value: number;
    loading: boolean,
};

class Index extends React.Component<WithStyles<typeof styles>, State> {
    state = {
        loading: false,
        value: 0,
    };
    handleChange = (event: React.ChangeEvent<{}>, value: number) => {
        this.setState({ value });
    };
    handleChangeLoading = (loading: boolean) => {
        this.setState({ loading });
    };


    render() {
        const { classes } = this.props;
        const { value, loading } = this.state;
        return (
            <Paper >


                <Paper className={classes.left}>
                    {loading && <LinearProgress color="secondary" />}
                    <Paper className={classes.paper} elevation={1}>
                        <IconButton color="primary" className={classes.iconButton} aria-label="Search">
                            Post
                        </IconButton>



                        <Divider className={classes.divider} />

                        <InputBase disabled className={classes.input} value="http://jxrysdgsorbgsdh.sajadweb.ir/cite" />
                        <Divider className={classes.divider} />
                        <Tooltip placement="top" title="اجرا کردن">
                            <IconButton onClick={() => {
                                this.handleChangeLoading(!loading);
                            }} color="primary" className={classes.iconButton} aria-label="Directions">
                                <DirectionsIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title="کپی کردن">
                            <IconButton className={classes.iconButton} aria-label="Copy">
                                <FileCopy />
                            </IconButton>
                        </Tooltip>



                    </Paper>
                    <Paper className={classes.ReactJson}>
                        <ReactJson
                            theme="railscasts"
                            iconStyle="square"
                            enableClipboard={false}
                            src={[
                                {
                                    city: "tehran",
                                    id: 1
                                },
                                {
                                    city: "shiraz",
                                    id: 2
                                },
                                {
                                    city: "isfahan",
                                    id: 3
                                }
                            ]} />
                    </Paper>
                </Paper>

                {value === 1 && <Paper>Page Two</Paper>}
                {value === 2 && <Paper>Page Three</Paper>}
            </Paper>
        );
    }
}

export default withStyles(styles)(Index);
