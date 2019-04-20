import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { LinearProgressUi } from '../../components-ui';
import { Query } from 'react-apollo';
import { LOCAL_LOADING_HADER_QUERY, cache } from '../../common';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            // justifyContent: 'center',
            flexWrap: 'wrap',
          },
          paper: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
          }
    });
 

function Index(props:any) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Query query={LOCAL_LOADING_HADER_QUERY}  >
      {({data: { loading, isLoading, error }})=>{ 
        
        return (<LinearProgressUi loading={isLoading} />);
      }}
    </Query>
        
    </div>
  );
}
 

export default withStyles(styles)(Index);
