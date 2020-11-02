import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CompleteContainer from './containers/CompleteContainer/CompleteContainer';
import IntroduceContainer from './containers/IntroduceContainer/IntroduceContainer';
import RankingContainer from './containers/RankingContainer/RankingContainer';
import MypageContainer from './containers/ProfileContainer/MypageContainer';
import EditProfileContainer from './containers/ProfileContainer/EditProfileContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import SignUpContainer from './containers/SignUpContainer/SignUpContainer';

const Routing = () => {
	return (
		<Switch>
			<Route path="/introduce" component={IntroduceContainer} />
			<Route path="/complete" component={CompleteContainer} />
			<Route path="/ranking" component={RankingContainer} />
			<Route exact path="/mypage" component={MypageContainer} />
			<Route exact path="/editprofile" component={EditProfileContainer} />
			<Route exact path="/login" component={LoginContainer} />
			<Route path="/signUp" componet={SignUpContainer} />
			<Route path="/signUp/:email" component={SignUpContainer} />
			<Route path="/signUp/auth" component={SignUpContainer} />
		</Switch>
	);
};

export default Routing;
