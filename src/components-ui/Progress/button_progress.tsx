import * as React from 'react';
import styles from "./button.style";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

interface IProps extends WithStyles<typeof styles> {
    title: string | Element | Element[];
    onClick: any;
    loading?: Boolean;
};
 
 
class Index extends React.Component<IProps> {


    render() {
        const { classes,title, onClick, loading} = this.props;
        return (
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        disabled={loading?true:false}
                        onClick={onClick}
                    >
                       {title}
            </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
        );
    }
}

export default withStyles(styles)(Index);

