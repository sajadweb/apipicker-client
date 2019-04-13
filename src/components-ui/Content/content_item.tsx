import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '../Container';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        left: {
            textAlign: "left",
        },
        center: {
            textAlign: "center",
        },
        media: {
            height: 200,
            paddingTop: '66.25%', // 16:9
        },
    });


interface IItim {
    title: string;
    image?: string;
    description: string;
    component?: any;
}

interface IProps extends WithStyles<typeof styles> {
    theme?: "left" | "right" | "center";
    item: IItim
};

class ContentItem extends React.PureComponent<IProps> {

    content = () => {
        const { theme, classes, item } = this.props;
        return (
            <CardContent>
                <Typography gutterBottom variant="title" component="h2">
                    {item.title}
                </Typography>
                <Typography variant="subtitle1" component="p">
                    {item.description}
                </Typography>
            </CardContent>
        )
    }

    items = () => {
        const { theme, classes, item } = this.props;
        return (
            <React.Fragment>
                {
                    item.image && (<CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.title}
                    />)
                }
                {item.component && item.component}
            </React.Fragment>

        )
    }
    render() {
        const { theme, classes, item } = this.props;
        if (theme === "left")
            return (
                <div className={classes.root}>
                    <Container>
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={6} className={classes.left}>
                                {this.content()}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {this.items()}
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            );

        if (theme === "right")
            return (
                <div className={classes.root}>
                    <Container>
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={6}>
                                {this.items()}
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.left}>
                                {this.content()}
                            </Grid>

                        </Grid>
                    </Container>
                </div>
            );

        return (
            <div className={classes.root}>
                <Container>
                    <Grid container spacing={24}>
                        <Grid item xs={12} className={classes.center}>
                            {this.content()}
                        </Grid>
                        <Grid item xs={12}>
                            {this.items()}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(ContentItem);
