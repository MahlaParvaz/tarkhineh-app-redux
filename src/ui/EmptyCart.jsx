import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-img">
        <img src="/public/images/empty-page.svg" alt="" />
        <p className="cart__text">شما هنوز هیچ محصولی انتخاب نکرده‌اید!</p>
        <Link to="/menu" className="btn cart__menu--btn">
          منوی رستوران
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
