import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

import slider from '../../public/images/slider.jpg';
import slider2 from '../../public/images/slider2.jpg';
import slider3 from '../../public/images/slider3.jpg';

function Banner() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        className="swiper"
      >
        <SwiperSlide
          style={{ '--image-url': `url(${slider})` }}
          className="swiper__slide"
        >
          <p className="swiper__text">تجربه غذای سالم و گیاهی به سبک ترخینه</p>
          <Link to="/menu">
            <button className="btn swiper__btn">سفارش آنلاین غذا</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{ '--image-url': `url(${slider2})` }}
          className="swiper__slide"
        >
          <p className="swiper__text">طعم بی‌نظیر طبیعت!</p>
          <Link to="/menu">
            <button className="btn swiper__btn">سفارش آنلاین غذا</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{ '--image-url': `url(${slider3})` }}
          className="swiper__slide"
        >
          <p className="swiper__text">
            لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!
          </p>
          <Link to="/menu">
            <button className="btn swiper__btn">سفارش آنلاین غذا</button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
