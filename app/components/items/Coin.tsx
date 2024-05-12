'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Draggable from "react-draggable";


const Coin = () => {
  const nodeRef = useRef(null);

  return (
    <Draggable ref={nodeRef}>
      <div className="">
        <Image src="/img/coin_real.png" alt="money" width="150" height="150" />
      </div>
    </Draggable>
  );
}

export default Coin