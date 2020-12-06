import styled from 'styled-components';

export const UserCampaignBox = styled.div`
	flex: 1;
`;

export const UserDataBoxWrap = styled.div`
	width: 25%;
	display: flex;
	align-items: center;
`;
export const UserCampaign = styled.div`
	width: 95%;
	height: 100%;
	border: 1px solid #ececec;
	border-radius: 2rem;
	box-shadow: 1px 3px #e7e7e7;
	display: flex;
`;
export const GraphBox = styled.div`
	flex: 1;
	margin: 2.5rem;
`;
export const StickBox = styled.div`
	display: flex;
	height: 21.88rem;
	width: 100%;
	justify-content: space-around;
	align-items: flex-end;
`;
export const Stick = styled.div`
	max-height: 18.75rem;
	height: 0;
	transition: height 1s;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: ${(props) => props.height}px;
	width: 20%;
	background-color: ${(props) => props.color};
	border-radius: 1rem 1rem 0 0;
`;
export const Line = styled.div`
	background-color: #7b7b7b;
	border-radius: 0.3125rem;
	height: 0.0625rem;
	width: 100%;
`;
export const NumberBox = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-top: 0.625rem;
`;
export const Number = styled.div`
	text-align: center;
`;
