import styled from 'styled-components';

export const MainContainer = styled.div`
	flex: 1;
`;
export const Container = styled.div`
	display: flex;
`;

export const HeaderEnd = styled.div`
	margin-top: 20px;
	margin-right: 20px;
	height: 50px;
	display: flex;
	justify-content: flex-end;
`;
export const Logout = styled.div`
	color: red;
	cursor: pointer;
`;
export const PasswordBox = styled.div`
	width: 65%;
	height: 70%;
	margin: 0 auto;
`;
export const TitleBox = styled.div`
	width: 50%;
	margin: 0 auto;

	text-align: center;
	font-size: 23px;
`;
export const bar = styled.div`
	width: 30%;
	margin: 0 auto;
	height: 3px;
	margin-top: 10px;
	background-color: #9dc3c1;
`;
export const PasswordInputBox = styled.div`
	margin: 0 auto;
	border: 1px solid #9dc3c1;
	width: 90%;
	border-radius: 1rem;
	height: 75%;
	margin-top: 60px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const PasswordBtn = styled.div`
	outline: none;
	cursor: pointer;
	color: white;
	border: 1px solid #b3d5d4;
	background-color: #b3d5d4;
	
	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 130px;
	margin: 0 auto;
	border-radius: 1rem;
	height: 30px;
    margin-top: 40px;
`;
export const InputPasswordBox  = styled.div`
margin:0 auto;
    display:flex;
    width:80%;
    height:40px;
    margin-top:40px;
    
`
export const WidthBox = styled.div`
    width:70%;
    height:70%;

`
export const text = styled.div`
font-size:18px;
height:100%;
display:flex;
align-items:center;
width:40%;
color:#525252;


`
export const Input = styled.input`
margin-left:20px;
outline:none;
    border:none;
    border-bottom:1px solid #B3D5D4;
    width:50%;

    &::placeholder{
        color:#ADADAD;
        font-size:20px;
        transform:translate(0px, 5px)
    }
`