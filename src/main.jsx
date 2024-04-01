import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { populationReducer } from './slice/population.js'
import { Provider } from 'react-redux'
import { cryptoReducer } from './slice/crypto.js'

const store = configureStore({
  reducer: {
    population: populationReducer,
    crypto: cryptoReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
