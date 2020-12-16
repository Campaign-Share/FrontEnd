import styled from 'styled-components';

export const RightWrapper = styled.div`
	flex: 1;
	padding-left: 18.75rem;
	width: calc(100% - 18.75rem);
`;

export const SortTextWrapper = styled.div`
	margin-top: 3.125rem;
	margin-left: 2.5rem;
	width: 18.75rem;
	height: 1.563rem;
	display: flex;
`;

export const SortText = styled.p`
	color: ${(props) => (props.id === props.selected ? '#9DB3B6' : '#535353')};
	font-family: Noto Sans CJK KR;
	width: 4.375rem;
	margin: 0;
	margin-right: 1.875rem;
	border-bottom: 2px solid
		${(props) => (props.id === props.selected ? '#9DC3C1' : '#707070')};
	text-align: center;
	cursor: pointer;
`;

export const BodyWrapper = styled.div`
	width: 90%;
	min-height: calc(100% - 165px);
	margin-left: 5%;
	margin-top: 1.25rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
