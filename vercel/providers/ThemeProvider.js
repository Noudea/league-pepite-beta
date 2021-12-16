import { useState, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../theme/ThemeColors'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeColors.light)

  useEffect(async () => {
    const localStorage = window.localStorage

    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme.name)
    }

    if (localStorage.getItem('theme')) {
      setTheme(ThemeColors[localStorage.getItem('theme')])
    }
  }, [])

  const context = {
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
