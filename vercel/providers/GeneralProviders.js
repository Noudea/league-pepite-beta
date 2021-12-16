import { useState } from 'react'
import AuthContext from '../contexts/AuthContext'
import ThemeProvider from './ThemeProvider'

const GeneralProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const authContextValue = {
    isLoggedIn,
    setIsLoggedIn
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  )
}

export default GeneralProvider
