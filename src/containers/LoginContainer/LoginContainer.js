import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApi } from '../../APIrequest';
import Login from '../../components/User/Login/Login';
import { login } from '../../modules/Login';

const LoginContainer = () => {
	const dispatch = useDispatch();
	const { id, password } = useSelector((state) => ({
		id: state.loginReducer.user_id,
		password: state.loginReducer.user_pw,
	}));

	const login = (id, password) => {
		dispatch(login(id, password));
		userLogin();
	};
	const userLogin = useCallback(() => {
		requestApi(
			'/v1/login/user',
			{ user_id: id, user_pw: password },
			{ 'Content-Type': 'application/json' },
			'post',
		);
	});

	return <Login />;
};

export default LoginContainer;
