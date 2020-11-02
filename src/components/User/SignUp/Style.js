import styled from 'styled-components';

export const Name = styled.input.attrs({
	type: 'test',
})`
	width: 70%;
	display: block;
	margin-top: 40px;
	border: none;
	border-bottom: 1px solid #d1d1d1;
	outline: none;
	font-size: 16px;
	&::placeholder {
		color: #d1d1d1;
		font-size: 16px;
	}
`;

export const NickName = styled(Name).attrs({
	placeholder: 'NickName',
})``;

export const IdBox = styled.div``;
export const Id = styled(Name).attrs({
	type: 'id',
	placeholder: 'ID',
})`
	display: inline-block;
	width: 50%;
	margin: 40px 10px 0px -110px;
`;

export const IdBtn = styled.button`
	width: 70px;
	height: 30px;
	border: none;
	outline: none;
	border-radius: 120px;
	background-color: #e7e7e7;
	color: #aeaeae;
	font-size: 12px;
`;

export const Password = styled(Name).attrs({
	type: 'password',
	placeholder: 'Password',
})`
	margin-top: 20px;
`;

export const IsError = styled.span`
	font-size: 12px;
	color: #FF0000;
	margin-right: 35px;
`;

export const Explan = styled.h3`
	font-size: 18px;
	color: #bcbcbc;
`;

export const Email = styled(Name).attrs({
	type: 'email',
})``;
