import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" render={() => (<IntroduceContainer/>)} />
			</Switch>
		</Router>
	);
};
export default App;
