import styled, { css } from 'styled-components';

export const ItemHover = css`
	background-color: #8db4a2;
	border-radius: 25px;
	color: white;
`;
export const ItemBox = styled.div`
	padding: 10px 0px 0px 15px;
	width: 80px;
	height: 40px;
	margin-top: 50px;
	display: flex;
	width: 180px;
	cursor: pointer;
	&:hover {
		${ItemHover}
	}
`;
export const ItemImg = styled.img`
	width: 29px;
	height: 30px;
	margin-right: 20px;
`;
export const ItemText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	color: #8d8d8d;
	&:hover {
		color: white;
	}
`;
