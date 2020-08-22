import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
// import App from './App'
import Admin from './admin'
import IRouter from "./pages/router_demo/route2/router"
import * as serviceWorker from "./serviceWorker";
import MyRouter from "./router.js";
ReactDOM.render(<MyRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
