import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import 'regenerator-runtime/runtime';
import { Provider } from "react-redux";
import store from "./store";

import {App} from './components/App';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store} >
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
);