import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Mypage from './components/Profile/mypage/Mypage';
import EditProfile from './components/Profile/editProfile/EditProfile.js'
const Routing = () => {
	return (
		<Switch>
			{/* <Route exact path="/" render={() => <IntroduceContainer />} /> */}
			<Route exact path="/Mypage" component={Mypage} />
			<Route exact path='/EditProfile' component={EditProfile}/>
		</Switch>
	);
};

export default Routing;
