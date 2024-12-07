import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { store } from './app/store.js';
import { App } from './app.js';

import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div id="portrait">
          <App />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
);
