import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import styles from "./container.style";
class Index extends React.Component<WithStyles<typeof styles>> {
    render() {
        const { classes } = this.props;
        return (
                <Grid container spacing={0} className={classes.continuer}>
                    <Grid item xs={12} >
                        {this.props.children}
                    </Grid>
                </Grid>   
        );
    }
}

export default withStyles(styles)(Index);
