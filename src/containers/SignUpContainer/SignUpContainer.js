import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Auth, Email, SignUp, SignUpImg } from '../../components/User/SignUp';
import { requestApi } from '../../APIrequest';
import {
	signUpEmail,
	signUpImg,
	signUpAuth,
	signUpInput,
} from '../../modules/SignUp';
import { useHistory } from 'react-router-dom';

const SignUpContainer = (props) => {
	const url = props.match.url;
	const dispatch = useDispatch();
	const history = useHistory();
	let component;

	const { email, name, nickname, id, password, userImg, code } = useSelector(
		(state) => ({
			email: state.signUpReducer.email,
			code: state.signUpReducer.authCode,
			name: state.signUpReducer.data.name,
			nickname: state.signUpReducer.data.nickname,
			id: state.signUpReducer.data.id,
			password: state.signUpReducer.data.password,
			userImg: state.signUpReducer.img,
		}),
	);

	const joinEmail = (email) => {
		dispatch(signUpEmail(email));
		emailChange(email);
	};

	const authEmail = (code) => {
		dispatch(signUpAuth(code));
		emailAuth(email, code);
	};

	// const image = (userImg) => {
	// 	console.log(userImg);
	// 	dispatch(signUpImg({ a: 5 }));
	// 	signUpData();
	// };

	const userData = (name, nickname, id, password) => {
		dispatch(signUpInput(name, nickname, id, password));
		signUpData(id, password, name, nickname, email);
	};

	const emailChange = useCallback((email) => {
		requestApi(
			'/v1/email/verify',
			{
				email,
			},
			{ 'Content-Type': 'application/json' },
			'post',
		)
			.then((res) => {
				console.log(res.data);
				switch (res.data.status) {
					case 200: {
						return history.push({
							pathname: '/signUp/auth',
							state: {
								email: email,
							},
						});
					}
				}
			})
			.catch((error) => {
				alert('이미 가입된 이메일입니다.');
			});
	});

	const emailAuth = useCallback((email, code) => {
		console.log(email, code);
		requestApi(
			'/v1/email/verify',
			{ email: email, auth_code: code },
			{ 'Content-Type': 'application/json' },
			'put',
		)
			.then((res) => {
				console.log(res.data);
				switch (res.data.status) {
					case 200: {
						return history.push({
							pathname: '/signUp/input',
							state: {
								email: email,
							},
						});
					}
				}
			})
			.catch((error) => {
				alert('인증 코드가 올바르지 않습니다.');
			});
	});

	const signUpData = useCallback((id, password, name, nickname, email) => {
		const data = new FormData();
		data.append('userID', id);
		data.append('userPW', password);
		data.append('name', name);
		data.append('nickName', nickname);
		data.append('email', email);
		// if (userImg !== '') {
		// 	data.append('profile', userImg);
		// }

		console.log(id, password, name, nickname, email, userImg);
		requestApi(
			'/v1/users',
			data,
			{ 'Content-Type': 'multipart/form-data' },
			'post',
		).then((res) => {
			console.log(res);
			if (res.data.status == '201') {
				const confirmBox = confirm(
					'회원가입이 되었습니다. 로그인을 해 주세요!',
				);
				if (confirmBox) {
					history.push({
						pathname: '/login',
					});
				} else {
					history.push({
						pathname: '/introduce',
					});
				}
			} else if (res.data.status == '400') {
				alert('이름을 두 글자 이상 입력해 주세요.');
			} else return 0;
		});
	});

	switch (url) {
		case '/signUp/email':
			return (component = <Email joinEmail={joinEmail} />);

		case '/signUp/auth':
			return (component = component = <Auth auth={authEmail} email={email} />);

		// case '/signUp/img':
		// 	component = <SignUpImg userImage={image} />;
		case '/signUp/input':
			return (component = <SignUp data={userData} />);
		default:
			return 0;
	}

	return <React.Fragment>{component}</React.Fragment>;
};
export default SignUpContainer;
