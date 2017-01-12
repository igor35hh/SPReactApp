import React from 'react';
import ReactDom from 'react-dom';
require('es6-promise').polyfill();

import Router from './router';

//let path = require('path');

ReactDom.render(Router, document.getElementById('root'));