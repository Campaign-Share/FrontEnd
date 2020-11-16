import React from 'react';
import { useSelector } from 'react-redux';
import ViewSuggestedModal from '../../../components/Modal/ViewSuggestedModal/ViewSuggestedModal';
import ViewSuggested from '../../../components/ViewSuggested/ViewSuggested';

const ViewSuggestedContainer = () => {
	const modalData = useSelector((state) => state.viewSuggested);

	return (
		<>
			{modalData.onModal && <ViewSuggestedModal />}
			<ViewSuggested />
		</>
	);
};

export default ViewSuggestedContainer;
