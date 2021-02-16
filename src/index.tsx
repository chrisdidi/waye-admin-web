import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import client from "./apolloClient";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.css";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBnvt0-jNsKGr3KArbBDAIb-CBMcvKrx3g",
  authDomain: "wayeapp-dcb13.firebaseapp.com",
  projectId: "wayeapp-dcb13",
  storageBucket: "wayeapp-dcb13.appspot.com",
  messagingSenderId: "118008527619",
  appId: "1:118008527619:web:7d57070299e1280bd58736",
};

firebase.default.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
