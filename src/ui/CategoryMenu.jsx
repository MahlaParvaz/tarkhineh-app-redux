import React from 'react';
import { arrowLeftIcon } from '../components/icons/IntroductionsIcons';
const categories = [
  { id: 1, type: 'همه' },
  { id: 2, type: 'غذاهای ایرانی' },
  { id: 3, type: 'غذاهای غیر ایرانی' },
  { id: 4, type: 'پیتزاها' },
  { id: 5, type: 'ساندویچ‌ها' },
];
function CategoryMenu() {
  return (
    <ul className='category'>
      {categories.map((item) => (
        <li key={item.id}>{item.type}
        {arrowLeftIcon}
        </li>
      ))}
    </ul>
  );
}

export default CategoryMenu;
