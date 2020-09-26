// React Router: single page app
// when we navigate around, we still are use of the same HTML document
// just showing and hiding different sets of components based on the url

import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// react-router-dom will automatically pass a bunch of props into the conponents rendered by the route component
const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </div>
            </Router>
        </div>
    )
}

export default App;