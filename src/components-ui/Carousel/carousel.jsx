import * as React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Index extends React.Component {
    render() {
        return (
            <React.Fragment >
                <Slider  >
                    {this.props.content.map((item, index) => (
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
