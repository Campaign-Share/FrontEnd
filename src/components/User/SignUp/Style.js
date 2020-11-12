import styled from 'styled-components';

export const Name = styled.input.attrs({
	type: 'test',
})`
	width: 70%;
	display: block;
	margin-top: 40px;
	border: none;
	border-bottom: 1px solid #d1d1d1;
	outline: none;
	font-size: 16px;
	&::placeholder {
		color: #d1d1d1;
		font-size: 16px;
	}
`;

export const NickName = styled(Name).attrs({
	placeholder: 'NickName',
})``;

export const IdBox = styled.div``;
export const Id = styled(Name).attrs({
	type: 'id',
	placeholder: 'ID',
})`
	display: inline-block;
	margin: 40px 10px 0px -100px;
`;

export const IdBtn = styled.button`
	width: 70px;
	height: 30px;
	border: none;
	outline: none;
	border-radius: 120px;
	background-color: #e7e7e7;
	color: #aeaeae;
	font-size: 12px;
`;

export const Password = styled(Name).attrs({
	type: 'password',
	placeholder: 'Password',
})`
	margin-top: 20px;
`;

export const IsError = styled.span`
	font-size: 12px;
	color: #ff0000;
	margin-right: 35px;
`;

export const Explan = styled.h3`
	font-size: 18px;
	color: #bcbcbc;
`;

export const Email = styled(Name).attrs({
	type: 'email',
})``;

export const ProfileBox = styled.section`
	width: auto;
	margin: 3.438rem 0rem 3.125rem 5.313rem;
`;

export const ProfileForm = styled.form.attrs({
	enctype: 'multipart/form-data',
})``;

export const ImgInput = styled.input.attrs({
	type: 'file',
	multiple: 'multiple',
	name: 'file',
	accept: 'image/jpg, image/png, image/jpeg, image/gif',
})`
	display: none;
`;

export const ChangeImg = styled.label.attrs({
	for: 'profile-img',
})`
	cursor: pointer;
`;

export const ImgBox = styled.div`
	width: 140px;
	height: 140px;
	position: relative;
	line-height: 130px;
`;

export const ChangeProfile = styled.img`
	width: 70%;
	position: relative;
	top: 0;
	left: 0;
	z-index: 2;
	vertical-align: middle;
`;

export const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	z-index: 1;
	border-radius: 50%;
	object-fit: cover;
	filter: brightness(40%);
`;

export const nextImg = styled.p`
	font-size: 12px;
	color: #9dc3c1;
`;
