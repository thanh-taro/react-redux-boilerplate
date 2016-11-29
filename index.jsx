import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {routes} from 'base/routes';
import {configureStore} from 'base/store';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} children={routes()}/>
  </Provider>
), document.getElementById('root'));
