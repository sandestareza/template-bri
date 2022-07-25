import Image from 'next/image'
import React from 'react'

const SiteImage = ({logo, type}) => {
  return (
    <>
        <Image 
            src={logo} 
            alt='logo'
            height={type === 'home' ? 950 : 500}
        />
    </>
  )
}

export default SiteImage