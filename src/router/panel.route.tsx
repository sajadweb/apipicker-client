import * as React from 'react';
import {
    Route, Switch, Link
} from 'react-router-dom';
import NotFound from "./404.route";
import User from "./../pages/user";
import Profile from "./../pages/user/profile";
import { WithPanelRoot } from '../common';
import { PanelHeader } from '../components';
import { URI_DASHBARD, URI_PROFILE, URI_PROJECT, URI_SERVICE, URI_SETTING } from './route.const';
import project from '../pages/project';
import service from '../pages/service';
import setting from '../pages/setting';

class Index extends React.PureComponent<{}>{

    render() {
        return (
            <div>
                <PanelHeader>
                    <Switch>
                        <Route exact path="/user/login" component={Profile} />
                        <Route exact path={URI_DASHBARD} component={User} />
                        <Route exact path={URI_PROFILE} component={Profile} />
                        <Route exact path={URI_PROJECT} component={project} />
                        <Route exact path={URI_SERVICE} component={service} />
                        <Route exact path={URI_SETTING} component={setting} />
                        <Route exact path="/*" component={NotFound} />
                    </Switch>
                </PanelHeader>
            </div>
        );
    }
}

export default WithPanelRoot(Index);