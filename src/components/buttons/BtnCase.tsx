import React from 'react'
import Case from"../../img/icons/case.svg"

export const BtnCase = () => {
  return (
    <div className="btn_conteiner">
        <img src={Case} alt="" />
        <button className='outlined-button'>Cart (0)</button>
    </div>
  )
}
