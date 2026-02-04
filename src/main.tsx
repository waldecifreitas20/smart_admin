import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EmployeeProvider } from './provider/EmployeeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </StrictMode>
)
