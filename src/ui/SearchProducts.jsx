// import React, { useState } from 'react';

import {
  searchDesktopIcon,
  searchIcon,
} from '../components/icons/FoodsMenuPageIcons';

function SearchProducts() {
  //   const [search, setSearch] = useState('');
  return (
    <form className="search-category__form">
      <input
        type="text"
        placeholder="جستجو"
        className="form__input"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <span className="form__search-mobile--btn">{searchIcon}</span>
        <span className="form__search-desktop--btn">{searchDesktopIcon}</span>
      </button>
    </form>
  );
}

export default SearchProducts;
