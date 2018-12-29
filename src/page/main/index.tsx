import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Code } from '../../components';



const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 1,
        },
        typography: {
            padding: theme.spacing.unit * 3,
        },
    });

type State = {
    open: boolean;
    value: number;
};

class Index extends React.Component<WithStyles<typeof styles>, State> {

    render() {
        const { classes } = this.props;

        return (
            <div className={this.props.classes.root}>
                <Typography className={classes.typography}>دیگه نیاز نیست همه api روبنویسی</Typography>

                <Code data={
                    {
                        title: "لیست شهرها",
                        description: "با این ای پی ای شما می توانید لیست شهر ها رو دریافت کنید ",
                        method: "POST",
                        path: "https://api.apipicker.com",
                        prefix: "/cite",
                        header: [
                            {
                                key: "Authorization",
                                value: "bear dscsdcsdfd,foswldfe,cow,fwsolfec,wo",
                                description: "",
                            }
                        ],
                        params: [
                            {
                                key: "name",
                                value: "sajadweb",
                                description: "it is name for user",
                            }
                        ],
                        body: {
                            page: 1,
                        },
                        receive: [{  id: 1,name: "string" },{id: 2,name: "string" },],
                    }
                } />
                <Typography className={classes.typography}>دیگه نیاز نیست همه api روبنویسی</Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
