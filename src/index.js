import React from "react";
import ReactDOM from "react-dom/client";

// for rtl format comment out bootstrap.min.css and uncomment bootstrap.rtl.min.css
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sass/stylesheet.scss";

//import your color stylesheet here
import "./sass/color-blue.scss"
// import "./sass/color-brown.scss"
// import "./sass/color-cyan.scss"
// import "./sass/color-green.scss"
// import "./sass/color-orange.scss"
// import "./sass/color-indigo.scss"
// import "./sass/color-purple.scss"
// import "./sass/color-red.scss"
// import "./sass/color-pink.scss"
// import "./sass/color-yellow.scss"

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
