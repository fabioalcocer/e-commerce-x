import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppContextProvider } from './Context'
import Head from './services/partytown'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <Head />
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
