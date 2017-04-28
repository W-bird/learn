import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom';

import Hello from './module/Hello.js';
import About from './module/About.js';
import Lists from './module/Lists.js';


var node = document.createElement('div');
node.id = 'router';
document.body.appendChild(node);

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Route path="/" component={Hello}></Route>
			<Route path="/" component={About}></Route>
			<Route path="/" component={Lists}></Route>
		</div>
	</BrowserRouter>
),document.getElementById('router'))