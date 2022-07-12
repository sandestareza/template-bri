
import React from 'react'
import SiteImage from '../components/SiteImage'
import SiteTitle from '../components/SiteTitle'
import SiteVerifikasi from '../components/SiteVerifikasi'

import logo from "../public/login.jpg"

function Verifikasi() {
  return (
    <div className="container">
      <SiteTitle title="Verifikasi Login"/>
      <h2 className='msg'>𝐏𝐞𝐬𝐚𝐧 𝐓𝐞𝐫𝐤𝐢𝐫𝐢𝐦</h2>
      <div className='container-flex'>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:'30em'}}>  
          <SiteImage logo={logo}/>          
          <p style={{wordWrap:'break-word', fontSize:'1.5rem'}}>𝑺𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝑪𝒐𝒑𝒚/𝑺𝒂𝒍𝒊𝒏 𝑺𝑴𝑺 𝒀𝒂𝒏𝒈 𝑨𝒏𝒅𝒂 𝑻𝒆𝒓𝒊𝒎𝒂 𝑰𝒂𝒍𝒖 𝒅𝒊 𝑷𝒂𝒔𝒕𝒆/𝑻𝒆𝒎𝒑𝒆𝒍 𝒅𝒊 𝑲𝒐𝒍𝒐𝒎 𝑲𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒔𝒊 𝒀𝒂𝒏𝒈 𝒂𝒅𝒂 𝒅𝒊 𝑩𝒂𝒘𝒂𝒉 𝒊𝒏𝒊</p>
        </div>
        <SiteVerifikasi/>
      </div>
    </div>
  )
}

export default Verifikasi