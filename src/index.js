/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';

const MainComponent = require('./components/MainComponent.react');

render(<MainComponent />, document.getElementById('application'));
module.hot.accept();
