import React from "react";
import Coin from "./items/Coin";
import Hammer from "./items/Hammer";

const BottomTab = () => {
  return (
    <div className="bg-pink-700 w-[80%] ml-[10%] rounded-b-full flex justify-center">
      <div className="flex justify-center">
        <Coin />
        <Hammer />
      </div>
      <div className="bg-black w-[200px] h-[50px] absolute top-[12%]"></div>
    </div>
  );
};

export default BottomTab;
