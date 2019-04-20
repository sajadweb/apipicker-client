import * as React from 'react';
import styles from "./liner.style";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import LinearProgress from '@material-ui/core/LinearProgress';
interface IProps extends WithStyles<typeof styles> {
    loading: Boolean;
};

function CustomizedProgress(props:IProps) {
  const { classes,loading } = props;
  if(!loading){
      return null;
  }
  return (
      <LinearProgress
        style={
            {
                zIndex: 999999,
            }
        }
        classes={{
          colorPrimary: classes.linearColorPrimary,
          barColorPrimary: classes.linearBarColorPrimary,
        }}
      />
  );
}

export default withStyles(styles)(CustomizedProgress);
