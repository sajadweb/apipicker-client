import * as React from 'react';
import {
    Route, Switch, Link
} from 'react-router-dom';
import Main from "./../pages/main";
import About from "./../pages/about";
import Auth from "./../pages/auth";
import { AUTH, ABOUT } from "./route.const";

import Notfound from "./404.route";
import { WithMainRoot } from '../common';
import { Header } from '../components';
class Index extends React.PureComponent<{}>{

    render() {
        return (
            <div>
                <Header>
                    <Switch>
                        <Route exact path={ABOUT} component={About} />
                        <Route exact path="/" component={Main} />
                        <Route exact path={AUTH} component={Auth} />
                        <Route exact path={'/*'} component={Notfound} />
                    </Switch>
                </Header>
            </div>
        );
    }
}

export default WithMainRoot(Index);