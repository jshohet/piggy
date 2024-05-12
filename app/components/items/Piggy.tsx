import React from 'react'
import Image from 'next/image'

const Piggy = () => {
  return (
    <div className="absolute top-[40%] animate-wiggle left-[40%]">
        <Image src="/img/piggy.png" alt="piggy" height="200" width="300"/>
    </div>
  )
}

export default Piggy