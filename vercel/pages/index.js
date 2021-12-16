import Link from 'next/link'
import { useContext, useState } from 'react'
import apiCall from '../services/api'
import { useRouter } from 'next/router'
import AuthContext from '../contexts/AuthContext'

function Connexion () {
  const router = useRouter()

  const { setIsLoggedIn } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    const { success, error } = await apiCall('post', 'auth/login', formData)
    if (success) {
      console.log(success)
      window.localStorage.setItem('token', success.token)
      setIsLoggedIn(true)
      router.push('/chat')
    }

    if (error) {
      console.log(error)
    }
  }

  return (
    <div className='vertical-center'>
      <div className='vertical-center h-100 w-100 connexion-container'>
        <div className='col-12 col-xl-3 border-container'>
          <h2> Se connecter </h2>
          <form name='connexion' method='POST' onSubmit={(e) => { handleLogin(e) }}>
            <input onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} id='email' className='form-control' type='email' name='email' required placeholder='Email' />
            <input onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} id='password' className='form-control' name='password' type='password' required placeholder='Mot de passe' />
            <button className='btn btn-primary w-100' type='submit'>Se connecter</button>
          </form>
          <p> Vous n'êtes pas encore inscrit ? <span> <Link href='/inscription'> S'inscrire </Link> </span></p>
        </div>
      </div>
    </div>
  )
}

export default Connexion
