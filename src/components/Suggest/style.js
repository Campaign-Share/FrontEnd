import styled from 'styled-components';

export const MainWrapper = styled.div`
	display: flex;
`;

export const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const BodyWrapper = styled.div`
	width: 100%;
	height: calc(100% - 4.375rem);
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const SuggestWrapper = styled.div`
	margin-top: 2%;
	width: 85%;
	height: 85%;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 0.5px solid #707070;
	border-radius: 1.375rem;
	box-shadow: 0.1875rem 0.1875rem 0.4375rem 0.0625rem rgba(112, 112, 112, 0.3);
`;

export const SuggestTitle = styled.input`
	margin-top: 2%;
	width: 30%;
	height: 6%;
	text-align: center;
	border: none;
	border-bottom: 1px solid #d1d1d1;
	font-family: Noto Sans CJK KR;
	font-size: 1.438rem;
	color: #909090;

	:focus {
		outline: none;
	}
`;

export const SuggestSubTitle = styled.input.attrs({})`
	width: 20%;
	height: 4%;
	text-align: center;
	border: none;
	border-bottom: 1px solid #d1d1d1;
	font-family: Noto Sans CJK KR;
	font-size: 1.125rem;
	color: #909090;

	:focus {
		outline: none;
	}
`;
