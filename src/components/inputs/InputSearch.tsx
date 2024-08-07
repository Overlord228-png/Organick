import React from 'react'
import Lypa from "../../img/icons/lupa.svg"

export const InputSearch = () => {
    return (
      <div className="">
        <img src={Lypa} alt="" />
        <input type="search" placeholder="Search..." />
      </div>
    );
  };
