import * as React from 'react';
import {
    Router, Route, Switch,Link
} from 'react-router-dom';
import Main from "./main.route";
import Panel from "./panel.route";

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class Index extends React.PureComponent<{}>{

    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <Switch>
                        <Route  path={'/user'} component={Panel} />
                        <Route exact path={'/*'} component={Main} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default Index;