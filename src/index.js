import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducers from './modules';
import {createStore} from 'redux';
import {provider} from 'react-redux';


ReactDOM.render(<App />, document.getElementById("root"));
