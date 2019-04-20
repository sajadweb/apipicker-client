import * as React from 'react';
import styles from "./liner.style";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import CircularProgress  from '@material-ui/core/CircularProgress';

interface IProps extends WithStyles<typeof styles> {
    loading?: Boolean;
};

function CustomizedProgress(props:IProps) {
    const { classes,loading } = props;
    if(loading){
        return null;
    }
  return (
      
      <CircularProgress
      variant="determinate"
      style={
        {
            zIndex: 999999,
        }
    }
      value={100}
      className={classes.facebook2}
      size={24}
      thickness={4}
    />
  );
}

export default withStyles(styles)(CustomizedProgress);

