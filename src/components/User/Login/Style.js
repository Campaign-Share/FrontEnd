import styled, { css } from 'styled-components';

export const UserContainer = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	background-image: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: 100% 700px;
`;

export const UserBox = styled.div`
	width: 33%;
	height: 80%;
	box-shadow: 6px 6px 6px rgb(0, 0, 0, 0.22);
	background-color: white;
	border-radius: 50px;
	margin: 60px 0px 20px 520px;
`;

export const ContentSection = styled.div`
	padding-top: 100px;
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 33px;
	color: #a2c2b3;
`;

export const InputBox = styled.div`
	margin: ${(props) => {
		if (props.email) return '50px 0px 0px 120px';
		else return '80px 0px 0px 120px';
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
	placeholder: 'Password',
})`
	margin-top: 50px;
`;

export const UserBtn = styled.button`
	width: 120px;
	height: 40px;
	border: none;
	border-radius: 100px;
	background-color: #e7e7e7;
	color: #aeaeae;
	font-size: 18px;
	font-weight: 800;
	margin-top: ${(props) => {
		if (props.email) return '280px';
		else if (props.signUp) return '100px';
		else return '150px';
	}};

	${(props) =>
		props.isActive &&
		css`
			background-color: #d3e2dc;
			color: #6f6f6f;
		`}
`;
