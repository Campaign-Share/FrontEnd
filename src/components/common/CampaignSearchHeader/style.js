import styled from 'styled-components';

export const Header = styled.div`
	width: 100%;
	height: 4.375rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const SearchBarWrapper = styled.div`
	width: 230px;
	height: 25px;
	border-bottom: 2px solid #aecfc0;
	display: flex;
	margin-right: 40px;
`;

export const SearchBar = styled.input`
	width: 200px;
	border: none;
	font-size: 18px;
	font-family: Noto Sans CJK KR;
	color: #adadad;

	:focus {
		outline: none;
	}
`;

export const SearchIcon = styled.img`
	height: 23px;
`;

export const HeaderIcon = styled.img`
	width: 3.125rem;
	margin-right: 2%;
	cursor: pointer;
`;
