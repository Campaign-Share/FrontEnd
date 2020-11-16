import styled from 'styled-components';

export const MainWrapper = styled.div`
	display: flex;
`;

export const RightWrapper = styled.div`
	flex: 1;
`;

export const SortTextWrapper = styled.div`
	margin-top: 50px;
	margin-left: 40px;
	width: 300px;
	height: 25px;
	display: flex;
`;

export const SortText = styled.p`
	color: ${(props) => (props.id === props.selected ? '#9DB3B6' : '#535353')};
	font-family: Noto Sans CJK KR;
	width: 70px;
	margin: 0;
	margin-right: 30px;
	border-bottom: 2px solid
		${(props) => (props.id === props.selected ? '#9DC3C1' : '#707070')};
	text-align: center;
	cursor: pointer;
`;

export const BodyWrapper = styled.div`
	width: 90%;
	min-height: calc(100% - 165px);
	margin-left: 5%;
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
