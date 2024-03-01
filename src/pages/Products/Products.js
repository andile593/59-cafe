// ProductList.js

const ProductList = ({ products }) => {
  return (
      <div>
          {products.map(product => (
              <div key={product.id}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
              </div>
          ))}
      </div>
  );
};

export default ProductList;
