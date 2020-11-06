import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CompleteContainer from './containers/CompleteContainer/CompleteContainer';
import IntroduceContainer from './containers/IntroduceContainer/IntroduceContainer';
import RankingContainer from './containers/RankingContainer/RankingContainer';
import MypageContainer from './containers/ProfileContainer/MypageContainer';
import EditProfileContainer from './containers/ProfileContainer/EditProfileContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import SignUpContainer from './containers/SignUpContainer/SignUpContainer';
import EditPasswordContainer from './containers/profileContainer/EditPasswordContainer';
import MainContainer from './containers/MainContainer/MainContainer';

const Routing = () => {
	return (
		<Switch>
			<Route path="/introduce" exact component={IntroduceContainer} />
			<Route path="/complete" exact component={CompleteContainer} />
			<Route path="/ranking" exact component={RankingContainer} />
			<Route path="/mypage" exact component={MypageContainer} />
			<Route path="/editprofile" exact component={EditProfileContainer} />
			<Route path="/suggest" exact component={MainContainer} />
			<Route path="/login" exact component={LoginContainer} />
			<Route path="/editPassword" exact component={EditPasswordContainer} />
			<Route
				path="/signUp/input"
				exact
				component={(props) => <SignUpContainer {...props} />}
			/>
			<Route
				path="/signUp/email"
				exact
				component={(props) => <SignUpContainer {...props} />}
			/>
			<Route
				path="/signUp/auth"
				exact
				component={(props) => <SignUpContainer {...props} />}
			/>
			<Route
				path="/signUp/img"
				exact
				component={(props) => <SignUpContainer {...props} />}
			/>
			<Redirect path="*" exact to="/introduce" />
		</Switch>
	);
};

export default Routing;
