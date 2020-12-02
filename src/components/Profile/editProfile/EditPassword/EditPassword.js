import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { requestApiWithAccessToken } from '../../../../APIrequest';
import * as S from './style';
import { useHistory } from 'react-router-dom';
const EditPassword = () => {
	const [input, setInput] = useState({ now: '', change: '', check: '' });
	const history = useHistory();
	const { user_uuid } = useSelector((store) => {
		return {
			user_uuid: store.editPassword.user_uuid,
		};
	});
	const ChangePassword = useCallback(() => {
		if (input.now && input.change && input.check) {
			if (input.change === input.check) {
				requestApiWithAccessToken(
					`/v1/users/uuid/${user_uuid}/password`,
					{ current_pw: input.now, revision_pw: input.change },
					{},
					'put',
				).then((res) => {
					if (res.data.status === 200) alert('비밀번호를 수정했습니다.');
					else if (res.data.status === 409)
						alert('현재 비밀번호가 잘못되었습니다.');
					else if (res.data.status === 400)
						alert('4글자 이상으로 입력해주세요');
					else console.log(res);
				});
			} else alert('새 비밀번호가 서로 다릅니다.');
		} else {
			alert('입력값이 없습니다.');
		}
	}, [input]);
	const secession = () => {
		if (confirm('정말로 탈퇴하시겠습니까?')) {
			requestApiWithAccessToken(
				`/v1/users/uuid/${user_uuid}`,
				{},
				{},
				'delete',
			).then((res) => {
				res.status === 200
					? (() => {
							alert('삭제가 완료되었습니다.');
							localStorage.removeItem('access_token');
							localStorage.removeItem('user_uuid');
							history.push('/introduce');
					  })()
					: console.log(res.status);
			});
		}
	};
	const inputChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setInput((prev) => ({ ...prev, [name]: value }));
		},
		[input],
	);
	return (
		<S.MainContainer>
			<S.Container>
				<S.HeaderEnd>
					<S.Logout onClick={secession}>회원 탈퇴</S.Logout>
				</S.HeaderEnd>
				<S.PasswordBox>
					<S.TitleBox>비밀번호 변경</S.TitleBox>
					<S.bar />
					<S.PasswordInputBox>
						<S.WidthBox>
							<S.InputPasswordBox>
								<S.text>현재 비밀번호 : </S.text>
								<S.Input
									placeholder="Password"
									value={input.now}
									onChange={inputChange}
									name="now"></S.Input>
							</S.InputPasswordBox>
							<S.InputPasswordBox>
								<S.text type="password">새 비밀번호 : </S.text>
								<S.Input
									type="password"
									placeholder="Password"
									value={input.change}
									onChange={inputChange}
									name="change"></S.Input>
							</S.InputPasswordBox>
							<S.InputPasswordBox>
								<S.text type="password">새 비밀번호 확인 : </S.text>
								<S.Input
									type="password"
									placeholder="Password"
									value={input.new}
									onChange={inputChange}
									name="check"></S.Input>
							</S.InputPasswordBox>
						</S.WidthBox>
					</S.PasswordInputBox>
					<S.PasswordBtn onClick={ChangePassword}>변경하기</S.PasswordBtn>
				</S.PasswordBox>
			</S.Container>
		</S.MainContainer>
	);
};
export default EditPassword;
