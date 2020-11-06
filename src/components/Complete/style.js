import styled from 'styled-components';

export const MainWrapper = styled.div`
	background-image: url(${(props) => props.url});
	background-position: left top;
	background-size: 100% 43.75rem;
	background-repeat: no-repeat;
	flex: 1;
	height: 100%;
`;
