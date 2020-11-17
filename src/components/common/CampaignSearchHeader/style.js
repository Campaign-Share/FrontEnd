import styled from 'styled-components';

export const Header = styled.div`
	width: 80%;
	height: 4.375rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const SearchBarWrapper = styled.div`
	width: 14.38rem;
	height: 1.563rem;
	border-bottom: 2px solid #aecfc0;
	display: flex;
	margin-right: 2.5rem;
`;

export const SearchBar = styled.input`
	width: 12.5rem;
	border: none;
	font-size: 1.125rem;
	font-family: Noto Sans CJK KR;
	color: #adadad;

	:focus {
		outline: none;
	}
`;

export const SearchIcon = styled.img`
	height: 1.438rem;
`;

export const HeaderIcon = styled.img`
	width: 3.125rem;
	margin-right: 2%;
	cursor: pointer;
`;
