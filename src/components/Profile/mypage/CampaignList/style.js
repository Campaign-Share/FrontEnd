import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	width: calc(100% - 300px);
	justify-content: space;
	flex-wrap: wrap;
	flex: 1;
	padding-left: 300px;
	height: 100%;
`;

export const ListContainer = styled.div`
	width: 100%;
	margin: 10px 0px 0px 100px;
	justify-content: space;
	flex-wrap: wrap;
	display: flex;
`;

export const HeaderBox = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

export const Filtering = styled.a`
	width: 140px;
	margin-right: 30px;
	border-bottom: 3px solid ${(props) => props.id == props.select && '#9dc3c1'};
	color: ${(props) =>
		props.id == props.select || props.id == props.pick ? '#9dc3c1' : '#535353'};
	cursor: pointer;
`;
