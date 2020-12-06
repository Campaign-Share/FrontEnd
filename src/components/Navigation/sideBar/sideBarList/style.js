import styled, { css } from 'styled-components';

export const ItemHover = css`
	border-bottom: 3px solid #8db4a2;
`;
export const ItemBox = styled.div`
	padding: 0.625rem 0px 0px 0.9375rem;
	height: 2.5rem;
	margin-top: 3.125rem;
	display: flex;
	width: 10.63rem;
	cursor: pointer;
	&:hover {
		${ItemHover}
	}
`;
export const ItemImg = styled.img`
	width: 1.813rem;
	height: 1.875rem;
	margin-right: 1.25rem;
`;

export const ItemText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1.875rem;
	color: #8d8d8d;
	&:hover {
	}
`;
