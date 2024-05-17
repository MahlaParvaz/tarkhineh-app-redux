import React from 'react';
import EmptyCart from './EmptyCart';
import {
  arrowLeftIcon,
  arrowRightIcon,
  cartDesktopIcon,
  tickSquareIcon,
  trashIcon,
  walletIcon,
  warningIcon,
} from '../components/icons/ShoppingCartIcons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toPersianNumbersWithComma } from '../utils/toPersianNumbersWithComma';
import {
  userDesktopIcon,
  userIcon,
} from '../components/icons/IntroductionsIcons';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  return (
    <div>
      <div className="cart-breadcrumb">
        <Link className="cart__icon">{arrowRightIcon}</Link>
        <p>سبد خرید</p>
        <button className="btn cart__remove--btn">{trashIcon}</button>
      </div>
      <div className="cart-desktop-breadcumb">
        <div className="breadcumb__item">
          <span>{cartDesktopIcon}</span>
          <p>سبد خرید</p>
          <span>- - - - - - - - - - - - - - - - - - </span>
        </div>
        <div className="breadcumb__item">
          <span>{tickSquareIcon}</span>
          <p>تکمیل اطلاعت</p>
          <span>- - - - - - - - - - - - - - - - - - </span>
        </div>
        <div className="breadcumb__item">
          <span>{walletIcon}</span>
          <p>پرداخت</p>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart__items">
          <div className="cart__item">
            <div className="item__text">
              <p>پیتزا سبزیجات</p>
              <span>{toPersianNumbersWithComma(140000)}تومان</span>
            </div>
            <div className="item__quantity">
              <span className="quantity__increase">+</span>
              <span className="quantity">{toPersianNumbersWithComma(1)}</span>
              <span className="quantity__delete">{trashIcon}</span>
            </div>
          </div>
          <div className="cart__item">
            <div className="item__text">
              <p>پیتزا سبزیجات</p>
              <span>{toPersianNumbersWithComma(140000)}تومان</span>
            </div>
            <div className="item__quantity">
              <span className="quantity__increase">+</span>
              <span className="quantity">{toPersianNumbersWithComma(1)}</span>
              <span className="quantity__delete">{trashIcon}</span>
            </div>
          </div>
          <div className="cart__item">
            <div className="item__text">
              <p>پیتزا سبزیجات</p>
              <span>{toPersianNumbersWithComma(140000)}تومان</span>
            </div>
            <div className="item__quantity">
              <span className="quantity__increase">+</span>
              <span className="quantity">{toPersianNumbersWithComma(1)}</span>
              <span className="quantity__delete">{trashIcon}</span>
            </div>
          </div>
          <div className="cart__item">
            <div className="item__text">
              <p>پیتزا سبزیجات</p>
              <span>{toPersianNumbersWithComma(140000)}تومان</span>
            </div>
            <div className="item__quantity">
              <span className="quantity__increase">+</span>
              <span className="quantity">{toPersianNumbersWithComma(1)}</span>
              <span className="quantity__delete">{trashIcon}</span>
            </div>
          </div>
        </div>
        <div className="cart__checkout">
          <hr />
          <div className="checkout__offPrice">
            <p>تخفیف محصولات</p>
            <span>{toPersianNumbersWithComma(60000)} تومان</span>
          </div>
          <hr />
          <div className="checkout__delivery">
            <div className="delivery__text">
              <p>هزینه ارسال</p>
              <span>{toPersianNumbersWithComma(0)} تومان </span>
            </div>
            <div className="delivery__warning">
              <span>{warningIcon}</span>
              <p>
                هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
                محاسبه و به این مبلغ اضافه خواهد شد.
              </p>
            </div>
          </div>
          <hr />
          <div className="checkout__totalPrice">
            <p>مبلغ قابل پرداخت</p>
            <span>{toPersianNumbersWithComma(542000)} تومان </span>
          </div>
          <button className="btn checkout__login--btn">
            {userIcon} ورود / ثبت نام
          </button>
        </div>
      </div>


      <div className="cart-desktop-container">
        <div className='cart__product-detail'>
            
        </div>
        <div className="cart__product-checkout"></div>
      </div>
      {/* <EmptyCart /> */}
    </div>
  );
}

export default ShoppingCart;
