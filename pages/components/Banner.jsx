import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative h-52  w-full object-cover" >
        <Image src="/banner.png" fill className="-z-10 object-cover"  />
    </div>
  )
}

export default Banner