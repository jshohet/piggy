'use client'
import React, {useRef, useState} from "react";
import Image from "next/image";
import Draggable from "react-draggable";

const Coin = () => {
  const nodeRef = useRef(null);


  return (
    <Draggable ref={nodeRef}>
      <div className="" >
        <Image src="/img/hammer.png" alt="money" width="150" height="150" />
      </div>
    </Draggable>
  );
};

export default Coin;
