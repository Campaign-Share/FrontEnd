import React from 'react';
import Auth from '../../components/User/SignUp/Auth';
import Email from '../../components/User/SignUp/Email';
import SignUp from '../../components/User/SignUp/SignUp';

const SignUpContainer = (props) => {
	const url = props.match.params;
	console.log(props.match.url);
	let component;
	if (url === 'email') {
		component = <Email />;
	} else if(props.match.url === '/signUp/auth'){
		component = <Auth />;
	} else {
		component = <SignUp/>
	}

	return <React.Fragment>{component}</React.Fragment>;
};

export default SignUpContainer;
