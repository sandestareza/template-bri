
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
    <div style={{width:'100%', padding:'0 1rem'}}>      
        <form>
            <label className='label-control'>Masukkan Pesan Verifikasi BRI</label>
            <textarea id='msg' className='form-control' rows={5}></textarea>
            <button type='button' onClick={handleClick} className='btn' id='btn' style={{marginTop:'-0.2em', marginBottom:'2em'}}>
              Konfirmasi
            </button>
        </form>
    </div>
  )
}

export default SiteVerifikasi