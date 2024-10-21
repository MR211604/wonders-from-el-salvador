import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppRouter } from './routers/AppRouter'
import { AuthProvider } from './auth/provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AuthProvider>
)
