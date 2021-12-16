import Link from 'next/link'
import { useEffect, useState } from 'react'
import apiCall from '../services/api'
import useRouter from 'next/router'

function Inscription () {
  const router = useRouter

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { success, error } = await apiCall('post', 'auth/register', formData)
    if (success) {
      router.push(success.redirect)
    }

    if (error) {
      // TODO gestion error
    }
  }

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
  }, [])
  // TODO
  return (
    <div className='vertical-center'>
      <div className='vertical-center h-100 w-100 inscription-container'>
        <div className='col-12 col-xl-3 border-container'>
          <h2>S'inscrire</h2>
          <form name='inscription' method='POST' onSubmit={(e) => { handleSubmit(e) }}>
            <input onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} id='name' className='form-control' name='name' required type='text' placeholder='Nom' />
            <input onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }) }} id='firstname' className='form-control' name='firstname' required type='text' placeholder='Prénom' />
            <input onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} id='email-inscription' className='form-control' type='email' name='email' required placeholder='Email' />
            <input onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} id='password' className='form-control' name='password' type='password' required placeholder='Mot de passe' />
            <button className='btn btn-primary w-100' type='submit'>S'inscrire</button>
          </form>
          <p> Vous êtes déjà inscrit ? <span> <Link href='/'> Se connecter </Link> </span></p>
        </div>
      </div>
    </div>
  )
}

export default Inscription
