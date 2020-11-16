import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SideBar from '../../components/Navigation/sideBar/SideBar';
import RankingContainer from '../RankingContainer/RankingContainer';
import ViewSuggestedContainer from './ViewSuggestedContainer/ViewSuggestedContainer';
import SuggestContainer from './SuggestContainer/SuggestContainer';
import ListContainer from '../profileContainer/ListContainer/ListContainer';
import Campaign from '../../components/common/Campaign/Campaign';
import SearchContainer from '../SearchContainer/SearchContainer';

const MainContainer = () => {
	return (
		<div style={{ display: 'flex' }}>
			<BrowserRouter>
				<SideBar />
				<Switch>
					<Route exact path="/main/ranking" component={RankingContainer} />
					{/* <Route exact path="/main/viewInProgress" component={} /> */}
					<Route
						exact
						path="/main/viewSuggested"
						component={ViewSuggestedContainer}
					/>
					<Route exact path="/main/suggest" component={SuggestContainer} />
					<Route
						path="/main/mypage/enterList"
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
