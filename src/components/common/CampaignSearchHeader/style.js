import styled from 'styled-components';

export const Header = styled.div`
	width: 100%;
	height: 4.375rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 20px;
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

export const SearchSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 1;
	padding-left: 360px;
	height: 100%;
`;

export const HeaderSection = styled.div`
	width: 100%;
	display: flex;
`;

export const ContentSection = styled.div`
	display: ${(props) => {
		if (props.isSearch) return 'none';
		else return 'flex';
	}};
	flex-wrap: wrap;
`;

export const SearchSpace = styled.div`
	display: flex;
	width: 100%;
	height: 25%;
`;

export const Space = styled.p`
	margin: 0 auto;
	font-size: 20px;
	color: #abc9c7;
`;
