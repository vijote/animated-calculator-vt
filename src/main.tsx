// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import './styles.css'

// Pages
import Router from './pages/router.tsx'
import TransitionProvider from './context/transition.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransitionProvider>
      <Router />
    </TransitionProvider>
  </React.StrictMode>,
)
