import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IntroduceContainer from './containers/IntroduceContainer/IntroduceContainer';

const GlobalStyle = createGlobalStyle`
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
`;

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Switch>
				<Route path="/" component={IntroduceContainer} exact />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
