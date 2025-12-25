/**
 * App Component
 * Main application component with HelmetProvider
 */

import { HelmetProvider } from 'react-helmet-async'
import { Routes } from '@/routes'

/**
 * Root application component
 * @returns App JSX element
 */
function App() {
  return (
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  )
}

export default App
