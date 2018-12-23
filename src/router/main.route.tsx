import * as React from 'react';
import {
    Route, Switch, Link
} from 'react-router-dom';
import Main from "./../page/main";
import About from "./../page/about";

import Notfound from "./404.route";
import { WithMainRoot } from '../common';
import { Header } from '../components';
class Index extends React.PureComponent<{}>{

    render() {
        return (
            <div>
                <Header>
                    <Switch>
                        <Route exact path="/about" component={About} />
                        <Route exact path="/" component={Main} />
                        <Route exact path={'/*'} component={Notfound} />
                    </Switch>
                </Header>
            </div>
        );
    }
}

export default WithMainRoot(Index);