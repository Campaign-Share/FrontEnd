import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore} from 'redux';
import {provider} from 'react-redux';
import rootReducer from "./modules";

const store = createStore(rootReducer);
ReactDOM.render(<provider store={store}><App /></provider>, document.getElementById("root"));
