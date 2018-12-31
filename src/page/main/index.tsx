import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Code, Carousel, Container, Content, ContentItem } from '../../components';



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
const items = [
    {
        title: "توسعه Api",
        description: ` پروتکل ها،
                                     اداره خطا و مدولاسیون کد فقط بعضی از سوالاتی است که تیم های شما قبل از ساخت یک API عالی باید در نظر بگیرند.
                                      Swagger ابزارهایی را برای سریع نمونه سازی و ایجاد قابلیت های API خود فراهم می کند`,
        image: "/static/images/blog/SW_Build_Band1.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Build_Band2.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Build_Band3.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Design_Band1.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Design_Band2.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Design_Band3.svg",
    },
   
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Document_Band1.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Document_Band2.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Document_Band3.svg",
    },


    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Test_Band1.svg",
    },
    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/SW_Test_Band3.svg",
    },

    {
        title: "توسعه Api",
        description: ` ود فراهم می کند`,
        image: "/static/images/blog/L_OV-Sos_GR_Band3.png",
    },
   
]
class Index extends React.Component<WithStyles<typeof styles>, State> {

    render() {
        const { classes } = this.props;

        return (
            <div className={this.props.classes.root}>

                <Carousel />
                {items.map((item, index) => (
                    <Content theme={index % 2 == 0 ? "black" : "white"}>
                        <ContentItem theme={index % 2 == 0 ? "left" : "right"} item={item} />
                    </Content>
                ))}


                <Content theme="white" >
                    <ContentItem theme="center" item={{
                        title: "همین حالا ایده خود رو بسازید",
                        description: "",
                        image: "",
                        component: (
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
                            } />)
                    }} />
                </Content>
            </div >
        );
    }
}

export default withStyles(styles)(Index);
