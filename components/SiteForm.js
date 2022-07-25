import React, { useState } from 'react'

const SiteForm = ({jenis, btnClick}) => {

    const [data, setData] = useState({})

    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        btnClick(data)
    }
  return (
    <form onSubmit={handleClick}>
        {
            jenis === 'login' ?
            <div style={{width:'100%', padding: '0 2em'}}>
                <label className='label-control'>
                    <img src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f464.svg" alt='icon1' className='icon-control'/>
                    Username<span>(Wajib)</span>
                </label>
                <input type="text" className='form-control' onChange={handleChange} name="username" required/>
                <label className='label-control'>
                    <img src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f512.svg" alt='icon1' className='icon-control'/>
                    Password<span>(Wajib)</span>
                </label>
                <input type="text" className='form-control' onChange={handleChange} name="password" required/>
                <p className='text-password'>Lupa Password?</p>
            </div>
            :
            <div style={{width:'100%', padding: '0 2em'}}>
                <p className='text-pin'>Konfirmasi PIN</p>
                <p>Silahkan konfirmasi PIN yang sudah Anda buat.</p>
                <label className='label-control'>
                    <img src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f512.svg" alt='icon1' className='icon-control'/>
                    m - PIN<span>(Wajib)</span>
                </label>
                <input type="text" className='form-control' onChange={handleChange} name="mPin" required/>
                <p className='text-password'>Lupa PIN?</p>
            </div>
        }
        <div style={{width:'100%', padding: '0 2em'}}>
            <button type='submit' className='btn' id='btn' style={{marginTop:'-0.2em', cursor:'pointer'}}>
                Login
            </button>
        </div>
    </form>
  )
}

export default SiteForm