import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SideBar from '../../components/Navigation/sideBar/SideBar';
import RankingContainer from '../RankingContainer/RankingContainer';
import ViewInProgressContainer from './ViewInProgressContainer/ViewInProgressContainer';
import ViewSuggestedContainer from './ViewSuggestedContainer/ViewSuggestedContainer';
import SuggestContainer from './SuggestContainer/SuggestContainer';
import InProgressJoin from './InProgressJoinContainer/InProgressJoinContainer';

const MainContainer = () => {
	return (
		<div style={{ display: 'flex' }}>
			<BrowserRouter>
				<SideBar />
				<Switch>
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
					<Redirect path="/main/*" to="/main/suggest" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default MainContainer;
