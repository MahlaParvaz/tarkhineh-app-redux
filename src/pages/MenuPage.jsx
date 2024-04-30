import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartIcon } from '../components/icons/FoodsMenuPageIcons';
import Banner from '../ui/Banner';
import CategoryMenu from '../ui/CategoryMenu';
import SearchProducts from '../ui/SearchProducts';
import { getAsyncProducs } from '../features/product/productSlice';
import { useEffect, useState } from 'react';
import Food from '../ui/Food';

function MenuPage() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    dispatch(getAsyncProducs());
    document.title = 'منو';
  }, []);

  useEffect(() => {
    setDisplayed(products);
    console.log(products);
  }, [products]);

  return (
    <div>
      <Banner />
      <div className="menu-tabs">
        <div className="menu-tab">
          <button className="btn menu-tab--btn">غذای اصلی</button>
          <button className="btn menu-tab--btn">پیش غذا</button>
          <button className="btn menu-tab--btn">دسر</button>
          <button className="btn menu-tab--btn">نوشیدنی</button>
        </div>
      </div>

      <div className="menu-category">
        <div className="menu-category__items">
          <CategoryMenu />
        </div>

        <div className="menu-category__search">
          <SearchProducts />
        </div>
      </div>

      <div className="menu-foods-header">
        <h3>غذاهای ایرانی</h3>
        <button className="btn foods-header--btn">
          <p>تکمیل خرید</p>
          <span>{shoppingCartIcon}</span>
        </button>
      </div>
      <div className="container max-w-[1224px] mx-auto min-h-[calc(100vh_-_530px)] md:min-h-[calc(100vh_-_700px)] ">
        <div className="">
          {displayed.map((product) => (
            <Food key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
