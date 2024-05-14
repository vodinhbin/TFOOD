/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./component/rtk/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";



const clientGoogleId = "915416831530-37eup0v11jjbdmi9s4835collmmc7k85.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientGoogleId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
)
