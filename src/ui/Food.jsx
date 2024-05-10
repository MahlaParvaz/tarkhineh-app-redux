import FoodCard from './FoodCard';

function Food({ productData }) {
  return (
    <div className="products-grid">
      {productData.map((product) => (
        <FoodCard productData={product} key={product.id} />
      ))}
    </div>
  );
}

export default Food;
