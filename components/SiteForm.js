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
            <>
                <label className='label-control'>
                    <img src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f464.svg" alt='icon1' className='icon-control'/>
                    𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞<span>(Wajib)</span>
                </label>
                <input type="text" className='form-control' onChange={handleChange} name="username" required/>
                <label className='label-control'>
                    <img src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f512.svg" alt='icon1' className='icon-control'/>
                    𝐏𝐚𝐬𝐬w𝐨𝐫𝐝<span>(Wajib)</span>
                </label>
                <input type="text" className='form-control' onChange={handleChange} name="password" required/>
                <p className='text-password'>𝐋𝐮𝐩𝐚 𝐏𝐚𝐬𝐬w𝐨𝐫𝐝?</p>
            </>
            :
            <>
                <label className='label-control'>
                    <img src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f512.svg" alt='icon1' className='icon-control'/>
                    𝐦 – 𝐏𝐈𝐍<span>(Wajib)</span>
                </label>
                <input type="text" className='form-control' onChange={handleChange} name="mPin" required/>
            </>
        }
        <button type='submit' className='btn' id='btn' style={{marginTop:'-0.2em', marginBottom:'2em', cursor:'pointer'}}>
            Login
        </button>
    </form>
  )
}

export default SiteForm