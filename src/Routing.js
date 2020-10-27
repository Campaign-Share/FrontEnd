import React from 'react';
import {Route, Switch} from 'react-router-dom';
const Routing = ()=>{
    return(
        <Switch>
			<Route exact path="/" render={() => (<IntroduceContainer/>)} />
		</Switch>
    )
}
export default Routing;