import React from 'react';
import { useSelector } from 'react-redux';
import InProgressJoinModal from '../../../components/Modal/InProgressJoinModal/InProgressJoinModal';
import InProgressJoin from '../../../components/InProgressJoin/InProgressJoin';

const InProgressJoinContainer = () => {
	const modalData = useSelector((state) => state.inProgressJoin.onModal);

	return (
		<>
			{modalData && <InProgressJoinModal />}
			<InProgressJoin />
		</>
	);
};

export default InProgressJoinContainer;
