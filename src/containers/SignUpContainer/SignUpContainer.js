import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Auth, Email, SignUp, SignUpImg } from '../../components/User/SignUp';
import requestApiWithAccessToken from '../../APIrequest';

const SignUpContainer = (props) => {
	const url = props.match.url;
	let component;

	if (url === '/signUp/email') {
		component = <Email userEmail={userEmail} />;
	} else if (url === '/signUp/auth') {
		component = <Auth userAuth={userAuth} />;
	} else if (url === '/signUp/img') {
		component = <SignUpImg userImg={userImg} />;
	} else {
		component = (
			<SignUp
				userName={name}
				userNickname={nickname}
				userId={id}
				userPassword={password}
			/>
		);
	}

	const {
		userEmail,
		name,
		nickname,
		id,
		password,
		userImg,
		userAuth,
	} = useSelector((state) => ({
		userEmail: state.signUpReducer.email,
		userAuth: state.signUpReducer.authCode,
		userName: state.signUpReducer.data.name,
		userNickname: state.signUpReducer.data.nickname,
		userId: state.signUpReducer.data.id,
		userPassword: state.signUpReducer.data.password,
		userImg: state.signUpReducer.img,
	}));

	useEffect(() => {
		console.log(userEmail);
		requestApiWithAccessToken('/v1/email/verify', userEmail, [], 'post').then(
			(res) => {
				console.log(res);
			},
		);
	}, [userEmail]);

	useEffect(() => {
		console.log(userAuth);
		requestApiWithAccessToken(
			'/v1/email/verify',
			{ userEmail, userAuth },
			[],
			'put',
		);
	}, [userAuth]);

	return <React.Fragment>{component}</React.Fragment>;
};
export default SignUpContainer;
