const REPORT_MODAL_ON = 'reportModal/REPORT_MODAL_ON';
const REPORT_MODAL_OFF = 'reportModal/REPORT_MODAL_OFF';

export const reportModalOn = () => ({
	type: REPORT_MODAL_ON,
});
export const reportModalOff = () => ({
	type: REPORT_MODAL_OFF,
});

const initialState = {
	onReportModal: false,
};

export default function reportModalReducer(state = initialState, action) {
	switch (action.type) {
		case REPORT_MODAL_ON: {
			return {
				...state,
				onReportModal: true,
			};
		}
		case REPORT_MODAL_OFF: {
			return {
				...state,
				onReportModal: false,
			};
		}
		default:
			return state;
	}
}
