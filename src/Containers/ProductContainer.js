import { connect } from 'react-redux';
import { fetchProducts } from '../redux/products/actions';
import ProductList from '../pages/Products/Products';

const ProductContainer = ({ products, fetchProducts }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return <ProductList products={products} />;
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        error: state.products.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
