import React from 'react';
import EkbatanImg from '../../public/images/ekbatan.jpg';
import ChalosImg from '../../public/images/chalos.jpg';
import AghdasiehImg from '../../public/images/aghdasieh.jpg';
import VanakImg from '../../public/images/vanak.jpg';
import {
  arrowLeftDesktopIcon,
  arrowLeftIcon,
} from '../components/icons/IntroductionsIcons';

const branchesData = [
  {
    image: EkbatanImg,
    title: 'شعبه اکباتان',
    text: ' شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
  },
  {
    image: ChalosImg,
    title: 'شعبه چالوس',
    text: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
  },
  {
    image: AghdasiehImg,
    title: 'شعبه اقدسیه ',
    text: ' خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
  },
  {
    image: VanakImg,
    title: 'شعبه ونک ',
    text: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
  },
];

function Branches() {
  return (
    <div className="branches-container">
      <h3>ترخینه گردی</h3>

      <div className="branches__cards">
        {branchesData.map((item, index) => (
          <div className="branches__card" key={index}>
            <img src={item.image} className="branches__card--img" />
            <div className="branches__card--text">
              <span>{item.title}</span>
              <p>{item.text}</p>
              <button className="btn branches__card--btn">
                صفحه شعبه
                {arrowLeftIcon}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branches;
