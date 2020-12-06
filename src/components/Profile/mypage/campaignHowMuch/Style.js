import styled from 'styled-components';

export const ListBox = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const ListBoxWrapper = styled.div`
	width: 30%;
	height: 100%;
	padding-left: 3.75rem;
	padding-right: 2.5rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ItemBox = styled.div`
	display: flex;
	width: 100%;
	height: 3.125rem;
	justify-content: center;
	align-items: center;
`;
export const ItemCircle = styled.div`
	border-radius: 10rem;
	width: 1.875rem;
	height: 1.875rem;

	background-color: ${(props) => props.backgroundColor};
`;
export const ItemText = styled.div`
	flex: 1;
	text-align: center;
	font-size: 20px;
	color: ${(props) => props.color};
	cursor: pointer;
`;
export const smallBox = styled.div`
	width: 100%;
	height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
