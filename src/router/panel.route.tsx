import * as React from 'react';
import {
    Route, Switch, Link
} from 'react-router-dom';
import NotFound from "./404.route";
import User from "./../page/user";
import UserLogin from "./../page/user/login";
import { WithPanelRoot } from '../common';
import { PanelHeader } from '../components';

class Index extends React.PureComponent<{}>{

    render() {
        return (
            <div>
                <PanelHeader>
                    <Switch>
                        <Route exact path="/user/login" component={UserLogin} />
                        <Route exact path="/user" component={User} />
                        <Route exact path="/*" component={NotFound} />
                    </Switch>
                </PanelHeader>
            </div>
        );
    }
}

export default WithPanelRoot(Index);