import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

import 'sanitize.css/sanitize.css';
// import 'highlight.js/styles/tomorrow-night.css';
import 'highlight.js/styles/tomorrow.css';

import 'styles/app.scss';

render(
  <App />,
  document.getElementById('app')
);
