import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	width: calc(100% - 100px);
	justify-content: space;
	flex-wrap: wrap;
	flex: 1;
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
	margin-bottom: 30px;
`;
export const textBox = styled.div`
	display: inline-block;
	width: 13%;
	border-bottom: 2px solid gray;
	text-align: center;
	margin-right: 40px;
	&:hover {
		border-bottom: 2px solid #9dc3c1;
	}
`;
export const Filtering = styled.span`
	font-size: 20px;
	color: gray;
	&:hover {
		color: #9dc3c1;
	}
	cursor: pointer;
`;
