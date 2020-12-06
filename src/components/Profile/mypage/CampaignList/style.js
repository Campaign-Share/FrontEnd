import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	width: calc(100% - 18.75rem);
	justify-content: space;
	flex-wrap: wrap;
	flex: 1;
	padding-left: 18.75rem;
	height: 100%;
`;

export const ListContainer = styled.div`
	width: 100%;
	margin: 0.625rem 0 0 6.25rem;
	justify-content: space;
	flex-wrap: wrap;
	display: flex;
`;

export const HeaderBox = styled.div`
	width: 100%;
	margin-bottom: 1.25rem;
`;

export const Filtering = styled.a`
	margin-right: 1.875rem;
	border-bottom: 3px solid ${(props) => props.id == props.select && '#9dc3c1'};
	color: ${(props) =>
		props.id == props.select || props.id == props.pick ? '#9dc3c1' : '#535353'};
	cursor: pointer;
`;
