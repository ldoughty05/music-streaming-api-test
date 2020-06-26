import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './app.js';
import { store } from './app/store.js';

import './index.css';

import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div id="portrait">
          <App />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
