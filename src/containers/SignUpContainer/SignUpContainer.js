import React from 'react';
import Email from '../../components/User/SignUp/Email';
import SignUp from '../../components/User/SignUp/SignUp';

const SignUpContainer = (props) => {
	const url = props.match.params.email;
	let component;
	if (url === 'email') {
		component = <Email />;
	} else {
		component = <SignUp />;
	}
	console.log(url);

	return <React.Fragment>{component}</React.Fragment>;
};

export default SignUpContainer;
