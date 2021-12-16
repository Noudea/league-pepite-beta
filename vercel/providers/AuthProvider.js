import { useRouter } from 'next/router'
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const AuthProvider = ({ children, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      setIsLoggedIn(false)
      router.push('/')
    }
    setIsLoaded(true)
  }, [])

  return (
    <>
      {isLoaded
        ? <>
          {isLoggedIn ? <>{children}</> : <p>logged out</p>}
        </>
        : <>Loading</>}

    </>
  )
}

export default AuthProvider
