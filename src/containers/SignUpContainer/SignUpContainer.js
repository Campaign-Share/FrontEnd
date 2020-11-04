import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Auth, Email, SignUp, SignUpImg } from '../../components/User/SignUp';
import signUpReducer from '../../modules/SignUp';

const SignUpContainer = (props) => {
	const url = props.match.url;
	let component;
	// const signUp = () => {
	// };
	if (url === '/signUp/email') {
		component = <Email />;
	} else if (url === '/signUp/auth') {
		component = <Auth />;
	} else if (url === '/signUp/img') {
		component = <SignUpImg />;
	} else {
		component = <SignUp signUpInput={signUpData} />;
	}

	const signUpData = ({ name, nickname, id, password }) => {
		const { signUpInput } = this.props;
		signUpInput({ name, nickname, id, password });
	};

	const joinEmail =(email) => {
		const { signUpEmail } = this.props;
		signUpEmail(email);
	}

	return <React.Fragment>{component}</React.Fragment>;
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUpInput: ({ name, nickname, id, password }) => {
			dispatch(signUpReducer.signUpInput({ name, nickname, id, password }));
		},
		signUpEmail: (email) => {
			dispatch(signUpReducer.signUpEmail(email));
		},
		SignUpImg: (img) => {
			dispatch(signUpReducer.signUpImg(img));
		},
	};
};
const mapStateToProps = (state) => ({
	email: state.email,
	name: state.name,
	nickname: state.nickname,
	id: state.id,
	password: state.password,
	img: state.img,
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
