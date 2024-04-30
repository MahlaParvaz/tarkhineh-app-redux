import React from 'react';
import { toPersianNumbersWithComma } from '../utils/toPersianNumbersWithComma';

function Food({ productData }) {
  const { title, price, offer, discountedPrice, description, image, slug, id } =
    productData;
  return (
    <div>
      <div className="foods__card">
        <div className="card__header">
          <span>{title}</span>
          <div className='card__header-price'>
            <span>{toPersianNumbersWithComma(price)}</span>
            <span>%{toPersianNumbersWithComma(offer)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
