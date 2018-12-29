import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import FileCopy from '@material-ui/icons/FileCopy';
import SendIcon from '@material-ui/icons/Send';
import ReactJson, { InteractionProps } from 'react-json-view';
import { Grid } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import DescriptionIcon from '@material-ui/icons/Description';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import LayersIcon from '@material-ui/icons/Layers';
import CodeIcon from '@material-ui/icons/Code';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = (theme: Theme) =>
    createStyles({
        bottomNavigation: {
            position: "relative",
            // top: "auto",
            // bottom: -10,
            marginBottom: 0
        },
        content: {
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            height: 250,
            overflowY: "scroll",
        },
        backJson: {
            backgroundColor: "rgb(43, 43, 43)",
        },
        ReactJson: {
            backgroundColor: "rgb(43, 43, 43)",
            padding: '20px',
            textAlign: 'right',
            direction: "rtl",
            height: 358,
            overflowY: "scroll",
        },
        left: {
            textAlign: 'right',
            direction: "rtl"
        },
        right: {
            textAlign: 'left',
            direction: "ltr"
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

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
    | "COPY" | "HEAD" | "OPTIONS" | "LINK" | "UNLINK"
    | "PURGE"
    | "LOCK"
    | "UNLOCK"
    | "PROPFIND"
    | "VIEW";
interface Params {
    key: string;
    value: string;
    description?: string;
}
interface IData {
    method: Method;
    title: string,
    description?: string,
    path: string,
    prefix?: string,
    header?: Array<Params>,
    params?: Array<Params>,
    body?: string | object
    receive?: string | object
}

type State = {
    value: number;
    content: number;
    loading: boolean,
    data: IData;
};
interface IProps extends WithStyles<typeof styles> {
    data: IData;
};

class Index extends React.Component<IProps, State> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            data: props.data,
            loading: false,
            value: 0,
            content: 0,
        };
    }
    handleChangeContent = (event: React.ChangeEvent<{}>, content: number) => {
        this.setState({ content });
    };
    handleChange = (event: React.ChangeEvent<{}>, value: number) => {
        this.setState({ value });
    };
    handleChangeLoading = (loading: boolean) => {
        this.setState({ loading });
    };
    renderTable = (data: Array<Params>) => {
        return (<Table >
            <TableHead>
                <TableRow>
                    <TableCell align="right">key</TableCell>
                    <TableCell align="right">value</TableCell>
                    <TableCell align="right">description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(row => {
                    return (
                        <TableRow key={row.key}>
                            <TableCell component="th" scope="row">
                                <InputBase value={row.key} />
                            </TableCell>
                            <TableCell align="right">
                                <InputBase value={row.value} />
                            </TableCell>
                            <TableCell align="right">
                                <InputBase value={row.description} />
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>)
    };
    renderBtnNav = (content: number) => {
        const { classes } = this.props;
        const { data } = this.state;
        if (!data) {
            return null;
        }
        switch (content) {
            case 1:
                //Header
                if (!data.header) {
                    return (
                        <Paper className={`${classes.content}`} elevation={1}>
                            <Typography component="p">
                                {"not set Header"}
                            </Typography>
                        </Paper>
                    )
                }
                return (
                    <Paper className={classes.content} elevation={1}>
                        {this.renderTable(data.header)}
                    </Paper>
                );
            case 2:
                //Params
                if (!data.params) {
                    return (
                        <Paper className={`${classes.content}`} elevation={1}>
                            <Typography component="p">
                                {"not set Params"}
                            </Typography>
                        </Paper>
                    )
                }
                return (
                    <Paper className={classes.content} elevation={1}>
                        {this.renderTable(data.params)}
                    </Paper>
                );
            case 3:
                //Body
                if (!data.body) {
                    return (
                        <Paper className={`${classes.content}`} elevation={1}>

                            <Typography component="p">
                                {"not set Proms"}
                            </Typography>
                        </Paper>
                    )
                }
                if (typeof data.body === "string") {
                    return (
                        <Paper className={`${classes.content} ${classes.right}`} elevation={1}>

                            <Typography component="p">
                                {data.body}
                            </Typography>
                        </Paper>
                    )
                }
                return (
                    <Paper className={`${classes.content} ${classes.backJson}`} elevation={1}>
                        <ReactJson
                            onEdit={(data) => {
                                alert(JSON.stringify(data));
                            }}
                            theme="railscasts"
                            iconStyle="square"
                            enableClipboard={false}
                            src={data.body} />
                    </Paper>
                );
            case 4:
                {
                    //Receive
                    if (!data.receive) {
                        return (
                            <Paper className={`${classes.content}`} elevation={1}>

                                <Typography component="p">
                                    {"not set Proms"}
                                </Typography>
                            </Paper>
                        )
                    }
                    if (typeof data.receive === "string") {
                        return (
                            <Paper className={`${classes.content} ${classes.right}`} elevation={1}>

                                <Typography component="p">
                                    {data.receive}
                                </Typography>
                            </Paper>
                        )
                    }
                    return (
                        <Paper className={`${classes.content} ${classes.backJson}`} elevation={1}>
                            <ReactJson
                                onEdit={(data) => {
                                    alert(JSON.stringify(data));
                                }}
                                theme="railscasts"
                                iconStyle="square"
                                enableClipboard={false}
                                src={data.receive} />
                        </Paper>
                    );
                }
            default:
                return (
                    <Paper className={`${classes.content} ${classes.right}`} elevation={1}>
                        <Typography variant="h5" component="h3">
                            {data.title}
                        </Typography>
                        <Typography component="p">
                            {data.description}
                        </Typography>
                    </Paper>
                )
        }

    };

    onEdit = (data: InteractionProps) => {
        this.setState({ data: this.setModelData(data.updated_src) });
    }
    private setModelData(data: any): IData {
        if (!data) {
            return this.state.data;
        }
        return data;
    }

    render() {
        const { classes } = this.props;
        const { data, content, loading } = this.state;
        if (!data) {
            return null;
        }
        return (
            <Paper >
                <Grid container >
                    <Grid item md={6} xs={12} >
                        <Paper className={classes.left}>
                            {loading && <LinearProgress color="secondary" />}
                            <Paper className={classes.paper} elevation={1}>
                                <IconButton color="primary" className={classes.iconButton} aria-label="Search">
                                    {data.method}
                                </IconButton>
                                <Divider className={classes.divider} />

                                <InputBase disabled className={classes.input} value={data.path + data.prefix} />
                                <Divider className={classes.divider} />
                                <Tooltip placement="top" title="اجرا کردن">
                                    <IconButton onClick={() => {
                                        this.handleChangeLoading(!loading);
                                    }} color="primary" className={classes.iconButton} aria-label="Send">
                                        <SendIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip placement="top" title="کپی کردن">
                                    <IconButton className={classes.iconButton} aria-label="Copy">
                                        <FileCopy />
                                    </IconButton>
                                </Tooltip>
                            </Paper>
                            {this.renderBtnNav(content)}
                            <Paper className={classes.bottomNavigation}>
                                <BottomNavigation
                                    value={content}
                                    onChange={this.handleChangeContent}
                                    showLabels >
                                    <BottomNavigationAction label="Description" icon={<DescriptionIcon />} />
                                    <BottomNavigationAction label="Header" icon={<LayersIcon />} />
                                    <BottomNavigationAction label="Params" icon={<ImportExportIcon />} />
                                    <BottomNavigationAction label="Body" icon={<CodeIcon />} />
                                    <BottomNavigationAction label="Receive" icon={<SaveAltIcon />} />
                                </BottomNavigation>
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Paper className={classes.left}>
                            <Paper className={classes.ReactJson}>
                                <ReactJson
                                    onEdit={this.onEdit}
                                    theme="railscasts"
                                    iconStyle="square"
                                    enableClipboard={false}

                                    src={data} />
                            </Paper>
                        </Paper>
                    </Grid>

                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(Index);
