import * as React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const content = [
    {
        image: "https://i.imgur.com/ZXBtVw7.jpg",
        title: "همین حالا ایده خود رو بسازید",
        description: "Apipicker"+"سبب طراحی API می شود و ابزارهای آسان برای استفاده را برای توسعه دهندگان، معماران و صاحبان محصول می سازد",
        button: "همین حالا شروع کن",
    },
    {
        image: "https://i.imgur.com/DvmN8Hx.jpg",
        title: "نگران ارتباط با هم تیمی خود نباشید",
        description: "ما برای شما بستری رو امده کردیم تا بتوانید داکیمنت ها خود رو با هم تیمی خود به اشتراگ بگزارید",
        button: "همین حالا شروع کن",
    },
    // {
    //     image: "https://i.imgur.com/DCdBXcq.jpg",
    //     title: "عنوان مناسب",
    //     description: "توضیح کامل",
    //     button: "همین حالا شروع کن",
    // },
]
class Index extends React.Component {


    render() {

        return (
            <React.Fragment >
                <Slider  >
                    {content.map((item, index) => (
                        <div
                            key={index}
                            style={{ background: `url('${item.image}') no-repeat center center`, }}
                        >
                            <div style={{
                                display: "inline-block",
                                position: 'relative',
                                textAlign: 'center',
                                top: '33%',
                                backgroundColor: "rgba(255,255,255,0.2)",
                                padding: "1%"
                            }}>
                                <Typography variant="h3" component="h1">{item.title}</Typography>
                                <p>{item.description}</p>

                                <Button variant="contained" color="primary"  >
                                    {item.button}
                                </Button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </React.Fragment >

        );
    }
}

export default Index;
