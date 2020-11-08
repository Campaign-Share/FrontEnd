import React, {useEffect} from 'react';
import getUserInfoFromAPI from '../../lib/getUserData';
import { useDispatch, useSelector } from 'react-redux';
import {getUserInfo} from '../../modules/EditPassword';
import EditPassword from '../../components/Profile/editProfile/EditPassword/EditPassword';
const EditPasswordContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getUserInfoFromAPI().then((res) => {
			dispatch(getUserInfo(res.data));
		});
	}, []);
	return <EditPassword></EditPassword>;
};
export default EditPasswordContainer;
