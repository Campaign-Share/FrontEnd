import React, { useEffect } from 'react';
import EditProfile from '../../components/Profile/EditProfile/EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import getUserInfoFromAPI from '../../lib/getUserData';
import { geteditProfileInfo } from '../../modules/EditProfle';

const EditProfileContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getUserInfoFromAPI().then((res) => {
			dispatch(geteditProfileInfo(res.data));
		});
	}, []);
	return <EditProfile />;
};
export default EditProfileContainer;
