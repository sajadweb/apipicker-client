import * as React from 'react';
import {
    Route, Switch
} from 'react-router-dom';
import Notfound from "./../pages/404";

class Index extends React.PureComponent<{}>{

    render() {
        return (
            <Notfound />
        );
    }
}

export default Index;