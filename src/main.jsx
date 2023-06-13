import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
