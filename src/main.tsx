import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppSeguro } from './components/AppSeguro'
import { CotizadorProvider } from './context/CotizadorProvider'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  </React.StrictMode>
)
