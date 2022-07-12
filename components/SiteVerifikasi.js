import Link from 'next/link'
import React from 'react'

const SiteVerifikasi = () => {
  return (
    <>      
        <form>
            <label className='label-control'>𝐌𝐚𝐬𝐮𝐤𝐚𝐧 𝐏𝐞𝐬𝐚𝐧 𝐕𝐞𝐫𝐢𝐟𝐢𝐤𝐚𝐬𝐢 𝐁𝐑𝐈</label>
            <textarea className='form-control' rows={7}></textarea>
            <button type='button' className='btn' style={{marginTop:'-0.2em', marginBottom:'2em'}}>
                <Link href="/verifikasiBerhasil">
                  <a>Konfirmasi</a>
                </Link>
            </button>
        </form>
    </>
  )
}

export default SiteVerifikasi