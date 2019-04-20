import * as React from 'react';
import {
    Router, Route, Switch,Link
} from 'react-router-dom';
import Main from "./main.route";
import Panel from "./panel.route";

import history from './history';
import { getToken } from '../common';
 

class Index extends React.PureComponent<{}>{

    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <Switch>
                        
                        {getToken() != null && <Route  path={'/*'} component={Panel} />}   
                        {getToken() == null &&  <Route exact path={'/*'} component={Main} />}
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default Index;