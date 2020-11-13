import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApi } from '../../APIrequest';
import Login from '../../components/User/Login/Login';
import { login, loginData } from '../../modules/Login';
import { useHistory } from 'react-router-dom';

const LoginContainer = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id, password } = useSelector((state) => ({
		id: state.loginReducer.user_id,
		password: state.loginReducer.user_pw,
	}));

	const userLogin = (id, password) => {
		dispatch(login(id, password));
		loginRe(id, password);
	};

	const loginRe = (id, password) => {
		requestApi(
			'/v1/login/user',
			{ user_id: id, user_pw: password },
			{ 'Content-Type': 'application/json' },
			'post',
		).then((res) => {
			console.log(res.data);
			switch (res.data.status) {
				case 200: {
					history.push({
						pathname: '/main/ranking',
					});

					localStorage.setItem(
						'access_token',
						`Bearer ${res.data.access_token}`,
					);
					localStorage.setItem('user_uuid', res.data.user_uuid);
				}
				case 409: {
					if (res.data.code == '-1031') alert('아이디가 존재하지 않습니다');
					else if (res.data.code == '-1032')
						alert('비밀번호가 올바르지 않습니다.');
				}
			}
		});
	};

	return <Login login={userLogin} />;
};

export default LoginContainer;
