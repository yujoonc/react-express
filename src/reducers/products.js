import { FILTER } from '../actions';

const initialProducts = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var productsInitialState = {
    initialProductList: initialProducts,
    filteredProductList: initialProducts
};

const products = (state = productsInitialState, action) => {
    switch(action.type) {
        case FILTER:
            return Object.assign({}, state, {
                filteredProductList: initialProducts
            });
        default:
            return state;
    }
};

export default products;