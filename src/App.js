import React from 'react';
import Routing from './Routing.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Routing />
		</Router>
	);
};
export default App;
