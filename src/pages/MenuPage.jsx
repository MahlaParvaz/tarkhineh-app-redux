import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartIcon } from '../components/icons/FoodsMenuPageIcons';
import Banner from '../ui/Banner';
import CategoryMenu from '../ui/CategoryMenu';
import SearchProducts from '../ui/SearchProducts';
import { getAsyncProducs } from '../features/product/productSlice';
import { useEffect, useState } from 'react';
import Food from '../ui/Food';

const categories = [
  'غذاهای ایرانی',
  'غذاهای غیر ایرانی',
  'پیتزاها',
  'ساندویچ‌ها',
];

function MenuPage() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [displayed, setDisplayed] = useState([]);
  console.log(products);
  useEffect(() => {
    dispatch(getAsyncProducs());
    document.title = 'منو';
  }, [dispatch]);

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const filteredProducts = categories.map((category) =>
    products.filter((product) => product.category === category)
  );
  console.log(filteredProducts);

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
        <button className="btn foods-header--btn">
          <p>تکمیل خرید</p>
          <span>{shoppingCartIcon}</span>
        </button>
      </div>
      <div className="foods-container ">
        <div className="foods-cards">
          {filteredProducts.map((products, index) => (
            <div className="foods-card" key={index}>
              <h3>{categories[index]}</h3>
              <Food productData={products} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
