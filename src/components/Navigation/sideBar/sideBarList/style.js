import styled from 'styled-components';

export const ItemBox = styled.div`
	padding-top: 10px;
	width: 80;
	height: 50px;
	margin-top: 30px;
	display: flex;

	&:hover {
		img {
			background: url(${(props) => props.activeImg});
		}
	}
`;
export const ItemImg = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 20px;
`;
export const ItemText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	color: #8d8d8d;
`;
