import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import { Link } from 'react-router-dom';


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


function handleClick(event:any) {
  event.preventDefault();
  alert('You clicked a breadcrumb.'); // eslint-disable-line no-alert
}


function SimpleBreadcrumbs(props:any) {
  const { classes,data } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Breadcrumbs aria-label="Breadcrumb">
        {data && data.map((item:{name:string,route:string|null})=>{
          if(item.route)
         { return (
          
            <Link   to={item.route}  >
            {item.name}
           </Link>
          
        );
      }else{
          return (<Typography color="textPrimary">{item.name}</Typography>);
        }
        
        })}       
        </Breadcrumbs>
      </Paper>
    </div>
  );
}
 

export default withStyles(styles)(SimpleBreadcrumbs);
