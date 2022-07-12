import Image from 'next/image'
import React from 'react'

const SiteImage = ({logo}) => {
  return (
    <>
        <Image 
            src={logo} 
            alt='logo'
        />
    </>
  )
}

export default SiteImage