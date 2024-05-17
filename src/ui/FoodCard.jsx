import React from 'react';
import { toPersianNumbersWithComma } from '../utils/toPersianNumbersWithComma';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

import {
  likeIcon,
  likeRedIcon,
  starIcon,
  starEmptyIcon,
  starDesktopIcon,
  starEmptyDesktopIcon,
} from '../components/icons/FoodsMenuPageIcons';
import { useDispatch, useSelector } from 'react-redux';
import { isInCart } from '../utils/functions';
import { addItem } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';

export const rating = {
  count: 5,
  value: 4,
  emptyIcon: <span>{starEmptyIcon}</span>,
  filledIcon: <span>{starIcon}</span>,
};

export const ratingDesktop = {
  count: 5,
  value: 4,
  emptyIcon: <span>{starEmptyDesktopIcon}</span>,
  filledIcon: <span>{starDesktopIcon}</span>,
};

function FoodCard({ productData }) {
  const { title, price, offer, discountedPrice, description, image, slug, id } =
    productData;
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const addToCart = () => {
    if (isInCart) {
      dispatch(addItem(productData));
      toast.success('محصول به سبد خرید اضافه شد', 'success');
    } else {
      toast.error('شما ابتدا باید وارد شوید', 'error');
    }
  };
  return (
    <div className="foods__cards">
      <Link to={`/menu/${slug}`}>
        <img src={image} alt={title} className="card__img" />
      </Link>
      <div className="foods__card">
        <div className="card__header">
          <span className="header__title">{title}</span>
          <div className="card__header-price">
            <span className="header__price">
              {toPersianNumbersWithComma(price)}
            </span>
            <span className="header__offer">
              % {toPersianNumbersWithComma(offer)}
            </span>
          </div>
        </div>

        <div className="card__content">
          <span className="">
            <Link to={`/menu/${slug}`}>{description.slice(0, 20)}...</Link>
          </span>
          <div className="">
            <span>{toPersianNumbersWithComma(discountedPrice)}</span>
            <span> &nbsp;تومان </span>
          </div>
        </div>

        <div className="card__footer">
          <div className="">
            {/* {isInFavorite(favorite, id) && isLoggedIn ? (
            <button
              className={`${likeStyle} !scale-[1.2] lg:!scale-[1.65]`}
              onClick={() => dispatch(disLikeItem(productData))}
            >
              {likeRedIcon}
            </button>
          ) : (
            <button className={likeStyle} onClick={likeHandler}>
              {likeIcon}
            </button>
          )} */}

            <div className="card__raite-mobile">
              <ReactStars {...rating} />
            </div>
            <div className="card__raite-desktop">
              <ReactStars {...ratingDesktop} />
            </div>
          </div>
          {isInCart(state, id) ? (
            <Link to="/cart">
              <button className="btn card__show-card--btn">
                مشاهده سبد خرید
              </button>
            </Link>
          ) : (
            <button className="btn card__add--btn" onClick={addToCart}>
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
