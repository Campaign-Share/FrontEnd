import styled from 'styled-components';

export const MainWrapper = styled.div`
	background-image: url(${(props) => props.url});
	background-position: left top;
	background-size: 100% 770px;
	background-repeat: no-repeat;
`;

export const Logo = styled.img`
	width: 70px;
`;
