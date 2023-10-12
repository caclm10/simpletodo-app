import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { UIProvider } from './providers/ui.provider.jsx'
import router from './router/index.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </React.StrictMode>,
)
