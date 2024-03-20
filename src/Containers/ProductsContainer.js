import { connect } from 'react-redux';
import { fetchAllProducts } from '../redux/products/actions';
import Products from '../pages/Products/Products';

const ProductContainer = ({ products, fetchAllProducts }) => {
    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return <Products products={products} />;
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        error: state.products.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
