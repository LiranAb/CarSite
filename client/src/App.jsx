import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { AuthLoader } from './components/RouteGuards'
import ErrorBoundary from './components/ErrorBoundary'
import router from './routes/AppRoutes'
import './styles/index.css'


function App() {
  return (
    <ErrorBoundary>
      <AuthLoader>
        <div className="min-h-screen bg-gray-50">
          <RouterProvider router={router} />
        </div>
      </AuthLoader>
    </ErrorBoundary>
  )
}

export default App
