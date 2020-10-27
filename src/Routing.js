import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Mypage from './components/Profile/mypage/Mypage';

const Routing = () => {
	return (
		<Switch>
			{/* <Route exact path="/" render={() => <IntroduceContainer />} /> */}
			<Route exact path="/Mypage" component={Mypage} />
		</Switch>
	);
};

export default Routing;
