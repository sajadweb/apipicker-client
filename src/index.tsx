import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './router';
import Apollo from './common/gql/Apollo';


const App=(
    <Apollo>
        <Router />
    </Apollo>
)
ReactDOM.render(App, document.querySelector('#root'));
