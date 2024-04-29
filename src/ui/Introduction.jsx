import React from 'react';
import {
  arrowLeftIcon,
  userIcon,
  lineChartIcon,
  homeWifiIcon,
  menuBoardIcon,
  userDesktopIcon,
  lineChartDesktopIcon,
  homeWifiDesktopIcon,
  menuBoardDesktopIcon,
  arrowLeftDesktopIcon,
} from '../components/icons/IntroductionsIcons';

const introductionData = [
  {
    mobileIcon: userIcon,
    desktopIcon: userDesktopIcon,
    text: 'پرسنلی مجرب و حرفه‌ای',
  },
  {
    mobileIcon: lineChartIcon,
    desktopIcon: lineChartDesktopIcon,
    text: 'کیفیت بالای غذاها',
  },
  {
    mobileIcon: homeWifiIcon,
    desktopIcon: homeWifiDesktopIcon,
    text: 'محیطی دلنشین و آرام',
  },
  {
    mobileIcon: menuBoardIcon,
    desktopIcon: menuBoardDesktopIcon,
    text: 'منوی متنوع',
  },
];
function Introduction() {
  return (
    <div className="introduction-container">
      <div className="introduction__img">
        <img src="/public/images/introduction.jpg" alt="can't show image" />
      </div>
      <div className="introduction">
        <div className="introduction__info">
          <h3 className="introduction__info-title">
            رستوران‌های زنجیره‌ای ترخینه
          </h3>
          <p className="introduction__info-text">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="introduction__btn">
            <button className="btn introduction--btn">اطلاعات بیشتر</button>
            <span className="introduction--mobile-icon">{arrowLeftIcon}</span>
            <span className="introduction--desktop-icon">
              {arrowLeftDesktopIcon}
            </span>
          </div>
        </div>
        <div className="introduction__items">
          {introductionData.map((item, index) => (
            <div className="introduction__item" key={index}>
              <span className="item--mobile-icon">{item.mobileIcon}</span>
              <span className="item--desktop-icon">{item.desktopIcon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
