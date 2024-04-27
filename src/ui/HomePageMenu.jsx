import React from 'react';
import Maincourse from '../../public/images/main-course.png';
import Appetizer from '../../public/images/appetizer.png';
import Dessert from '../../public/images/dessert.png';
import Drink from '../../public/images/drink.png';
import { SearchIcon } from '../components/icons/NavbarIcons';

const homePageMenuData = [
  {
    id: 1,
    img: Maincourse,
    text: 'غذای اصلی',
  },
  {
    id: 2,
    img: Appetizer,
    text: 'پیش غذا',
  },
  {
    id: 3,
    img: Dessert,
    text: 'دسر',
  },
  {
    id: 4,
    img: Drink,
    text: 'نوشیدنی',
  },
];

function HomePageMenu() {
  return (
    <div className="menu-container">
      <div className="search-container">
        <input type="text" className="search__input" placeholder="جستجو ..." />
        <SearchIcon />
      </div>
      <h2 className="menu__title">منوی رستوران</h2>
      <div className="menu__items">
        {homePageMenuData.map((item) => (
          <div className="menu__item" key={item.id}>
            <img className="item__img" src={item.img} alt="" />
            <div className="item__background"></div>
            <button className="item--btn">{item.text} </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageMenu;
