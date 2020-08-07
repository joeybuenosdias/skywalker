import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/** components */
import App from './App/App';

/** styles */
import './global.css';

/** redux store */
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
