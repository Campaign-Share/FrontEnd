import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SideBar from '../../components/Navigation/sideBar/SideBar';
import RankingContainer from '../RankingContainer/RankingContainer';
import ViewInProgressContainer from './ViewInProgressContainer/ViewInProgressContainer';
import ViewSuggestedContainer from './ViewSuggestedContainer/ViewSuggestedContainer';
import SuggestContainer from './SuggestContainer/SuggestContainer';
import InProgressJoin from './InProgressJoinContainer/InProgressJoinContainer';
import ListContainer from '../profileContainer/ListContainer/ListContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import MypageContainer from '../profileContainer/MypageContainer';
import EditProfileContainer from '../profileContainer/EditProfileContainer';

const MainContainer = () => {
	return (
		<div style={{ display: 'flex', height: '100%' }}>
			<BrowserRouter>
				<SideBar />
				<Switch>
					<Route
						path="/main/editprofile"
						exact
						component={EditProfileContainer}
					/>

					<Route path="/main/mypage" exact component={MypageContainer} />

					<Route exact path="/main/ranking" component={RankingContainer} />
					<Route
						exact
						path="/main/viewInProgress"
						component={ViewInProgressContainer}
					/>
					<Route
						exact
						path="/main/viewSuggested"
						component={ViewSuggestedContainer}
					/>
					<Route exact path="/main/suggest" component={SuggestContainer} />
					<Route exact path="/main/inProgressJoin" component={InProgressJoin} />
					<Route
						path="/main/mypage/participationList"
						exact
						component={ListContainer}
					/>
					<Route
						path="/main/mypage/acceptList"
						exact
						component={ListContainer}
					/>
					<Route
						path="/main/mypage/refusalList"
						exact
						component={ListContainer}
					/>
					<Route path="/main/search" exact component={SearchContainer} />
					<Redirect path="/main/*" to="/main/suggest" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default MainContainer;
