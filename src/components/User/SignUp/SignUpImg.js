import React, { useState } from 'react';
import * as L from '../Login/Style';
import * as S from './Style';
import { background, defaultImg, profileEdit } from '../../../assets/img';

const SignUpImg = ({ userImage }) => {
	let [file, setFile] = useState('');
	let [profile, setProfile] = useState('');

	const imgChange = (e) => {
		e.preventDefault();
		const read = new FileReader();
		let file = e.target.files[0];
		read.onloadend = () => {
			setFile(file);
			setProfile(read.result);
		};
		read.readAsDataURL(file);
	};

	const imgBtn = () => {
		const form = new FormData();
		form.append()
		userImage(form);
		console.log(file);
	};

	return (
		<L.UserContainer url={background}>
			<L.UserBox auth>
				<L.ContentSection>
					<L.Title>회원가입</L.Title>
					<S.Explan>프로필 사진을 업로드해 주세요.</S.Explan>
					<S.ProfileBox>
						<S.ProfileForm>
							<S.ImgInput id="profile-img" onChange={imgChange}></S.ImgInput>
						</S.ProfileForm>
						<S.ChangeImg>
							<S.ImgBox>
								<S.ChangeProfile src={profileEdit} />
								{file == '' ? (
									<S.ProfileImage src={defaultImg} />
								) : (
									<S.ProfileImage src={profile} />
								)}
							</S.ImgBox>
						</S.ChangeImg>
					</S.ProfileBox>
					<L.UserBtn profile id="button" onClick={imgBtn}>
						회원가입
					</L.UserBtn>
				</L.ContentSection>
			</L.UserBox>
		</L.UserContainer>
	);
};

export default SignUpImg;
