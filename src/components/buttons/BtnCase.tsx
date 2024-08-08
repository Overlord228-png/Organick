import React from 'react';
import Case from"../../img/icons/case.svg"
interface CartButtonProps {
  count: number;
}

const BtnCase: React.FC<CartButtonProps> = ({ count }) => {
  return (
    <button className="cart-button">
      <div className="icon-container">
        <img src={Case} alt="Cart" />
      </div>
      <p className='text_cart'>Cart ({count})</p>
    </button>
  );
}

export default BtnCase;