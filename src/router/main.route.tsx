import * as React from 'react';
import {
    Route, Switch, Link
} from 'react-router-dom';
import Main from "./../pages/main";
import About from "./../pages/about";
import Auth from "./../pages/auth";
import {Github, Google} from "./../pages/auth/socialite";
import { URI_AUTH, URI_ABOUT,URI_Github, URI_Google } from "./route.const";

import Notfound from "./404.route";
import { WithMainRoot } from '../common';
import { Header } from '../components';

class Index extends React.PureComponent<{}>{

    render() {
        return (
            <div>
                <Header>
                    <Switch>
                        <Route exact path={URI_ABOUT} component={About} />
                        <Route exact path="/" component={Main} />
                        <Route exact path={URI_AUTH} component={Auth} />
                        <Route exact path={URI_Github} component={Github} />
                        <Route exact path={URI_Google} component={Google} />
                        <Route exact path={'/*'} component={Notfound} />
                    </Switch>
                </Header>
            </div>
        );
    }
}

export default WithMainRoot(Index);