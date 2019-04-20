import React from 'react';
import PropTypes from 'prop-types';

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
};
interface  IItem{
    title: string | Element | Element[];
    component: Element | Element[];

};
interface IProps extends WithStyles<typeof styles> {
    items: Array<IItem>

};
type IState = {
    value: Number;
};

class Index extends React.Component<IProps,IState> {
  state = {
    value: 0,
  };

  handleChange = (event:any, value:any) => {
    this.setState({ value });
  };
  
  render() {
    const { classes,items } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
        {items.map((item,i)=>(
            <Tab key={i} label={item.title} />
        ))}
          
         
        </Tabs>
        {items[this.state.value].component}
      </Paper>
    );
  }
}

 

export default withStyles(styles)(Index);