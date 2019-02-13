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
        title: "طراحی API",
        description: `طراحی API اساس کار توسعه دهنگان api هست. Apipicker   با استفاده از ابزارهای ساده  برای توسعه دهندگان، معماران و صاحبان محصول  طراحی API را  راحتر میکند.`,
        image: "/static/images/blog/SW_Build_Band1.svg",
    },
    {
        title: "مجازی سازی عملیات پایه",
        description: `توسعه API می تواند زمانی که وابستگی های زیادی به خدمات داخلی و خارجی وجود دارد، بسیار دشوار است. وابستگی API خود را ترسانده و با آنها ارتباط برقرار کنید قبل از اینکه سرویس واقعی بوسیله SwaggerHub قابلیت های خفه کردن ایجاد شود. صرفه جویی در وقت و پول و به راحتی با سرویس های تعریف شده در قرارداد API خود ارتباط برقرار کنید، برای توسعه سریعتر و همکاری بهتر.`,
        image: "/static/images/blog/SW_Build_Band3.svg",
    },
   
    {
        title: "مستندات از طراحی API شما",
        description: `تکامل قابلیت API شما اجتناب ناپذیر است، اما سردرد حفظ API ها مجبور نیست. ابزار Swagger کار سختی را از تولید و حفظ اسناد API شما انجام می دهد و اطمینان از اینکه مستندات شما تا به امروز به عنوان API شما تکامل یافته است، به روز می شود.`,
        image: "/static/images/blog/SW_Document_Band1.svg",
    },


    {
        title: "تست API",
        description: ` اتوماتیک آزمایش API شما و تایید اینکه آن را به طور صحیح در صحنه های مختلف کار می کند ساده با SoapUI Pro است. شما می توانید تعاریف API خود را وارد کنید:
    • به راحتی اعتبار قوانین طرح
    • به طور خودکار عبارات را در مقابل نقطه های انتهایی تولید می کند
    • داده های واقعی یا مصنوعی را به پارامترها تزریق کنید`,
        image: "/static/images/blog/SW_Test_Band1.svg",
    }
   
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


                <Content theme={items.length % 2 == 0 ? "black" : "white"} >
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
