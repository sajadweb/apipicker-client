import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Code, Container, Content, ContentItem } from '../../../components';
import {Carousel} from '../../../components-ui';

import { IPropsCode, IPropsCarousel} from '../../../common';



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
type IContent = {
    title: string;
    description: string;
    image: string;
};
interface IProps extends WithStyles<typeof styles> {
    items: Array<IContent>,
    code: IPropsCode,
    carousel: Array<IPropsCarousel>,
};

class Index extends React.Component<IProps, State> {

    render() {
        const { classes,items,carousel } = this.props;

        return (
            <div className={this.props.classes.root}>
                <Carousel content={carousel} />
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
                            <Code data={this.props.code} />)
                    }} />
                </Content>
            </div >
        );
    }
}

export default withStyles(styles)(Index);
