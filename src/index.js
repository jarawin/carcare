import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import reportWebVitals from './utils/reportWebVitals';

import App from './app/App';
import './services/i18n';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
