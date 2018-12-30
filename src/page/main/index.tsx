import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Code, Carousel, Container } from '../../components';



const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            marginTop: theme.spacing.unit * 9,
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
                <Carousel />
                <Container>

                    <Typography variant="h4" component="h4">{"همین حالا ایده خود رو بسازید"}</Typography>

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
                            receive: [{ id: 1, name: "string" }, { id: 2, name: "string" },],
                        }
                    } />
                    <br />
                    <br />
                    <br />
                    <Typography variant="h4" component="h4">{"همین حالا ایده خود رو بسازید"}</Typography>

                    <Typography className={classes.typography}>دیگه نیاز نیست همه api روبنویسی</Typography>

                    <Code data={
                        {
                            title: "اسلایدر صفحه اصلی",
                            description: "با این ای پی ای شما می توانید لیست ایتم های رو دریافت کنید ",
                            method: "GET",
                            path: "https://api.apipicker.com",
                            prefix: "/feed",
                            header: [
                                {
                                    key: "Authorization",
                                    value: "bear dscsdcsdfd,foswldfe,cow,fwsolfec,wo",
                                    description: "",
                                }
                            ],
                            receive: [{ id: 1, name: "string", path: "img.png" }, { id: 2, name: "string" , path: "img.png" },],
                        }
                    } />
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
