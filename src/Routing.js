import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CompleteContainer from './containers/CompleteContainer/CompleteContainer';
import IntroduceContainer from './containers/IntroduceContainer/IntroduceContainer';
import RankingContainer from './containers/RankingContainer/RankingContainer';

const Routing = () => {
	return (
		<Switch>
			<Route path="/introduce" component={IntroduceContainer} />
			<Route path="/complete" component={CompleteContainer} />
			<Route path="/ranking" component={RankingContainer} />
		</Switch>
	);
};

export default Routing;
