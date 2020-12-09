import styled, { css } from 'styled-components';

export const UserContainer = styled.div`
	text-align: center;
	background-image: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: 100% 43.75rem;
	padding-top: ${(props) => {
		if (props.join) return '3.75rem';
		else return '5rem';
	}};
`;

export const UserBox = styled.div`
	width: 33%;
	height: ${(props) => {
		if (props.join) return '40.63rem';
		else return '37.5rem';
	}};
	box-shadow: 6px 6px 6px rgb(0, 0, 0, 0.22);
	background-color: white;
	border-radius: 50px;
	margin: 0px 32.5rem 0px 32.5rem;
`;

export const ContentSection = styled.div`
	padding-top: 6.25rem;
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 33px;
	color: #a2c2b3;
`;

export const InputBox = styled.div`
	margin: ${(props) => {
		if (props.email) return '3.125rem 0 0 7.5rem';
		else return '5rem 0 0 7.5rem';
	}};
`;

export const Id = styled.input.attrs({
	type: 'id',
	placeholder: 'ID',
})`
	width: 70%;
	display: block;
	border: none;
	border-bottom: 1px solid #d1d1d1;
	outline: none;
	font-size: 16px;
	&::placeholder {
		color: #d1d1d1;
		font-size: 16px;
	}
`;

export const Password = styled(Id).attrs({
	type: 'password',
	placeholder: 'Password',
})`
	margin-top: 3.125rem;
`;

export const UserBtn = styled.button`
	width: 7.5rem;
	height: 2.5rem;
	border: none;
	outline: none;
	border-radius: 100px;
	background-color: #e7e7e7;
	color: white;
	font-size: 18px;
	font-weight: 800;
	margin-top: ${(props) => {
		if (props.email || props.auth) return '15rem';
		else if (props.signUp) return '6.25rem';
		else if (props.profile) return '3.125rem';
		else return '9.375rem';
	}};

	${(props) =>
		props.isActive &&
		css`
			background-color: #d3e2dc;
		`}
`;
