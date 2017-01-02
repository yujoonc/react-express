import _ from 'lodash';
import { SEARCH_TEXT, CHECKOUT } from '../actions';

const initialProducts = [
    {category: 'Sporting Goods', price: '49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '199.99', stocked: true, name: 'Nexus 7'}
];

var productsInitialState = {
    initialProductList: initialProducts,
    filteredProductList: initialProducts,
    searchText: '',
    inStockOnly: false,
    totalPaymentAmount : _.sumBy(initialProducts, (product)=> parseFloat(product.price)),
    paymentAmount: 0
};

const products = (state = productsInitialState, action) => {
    let filteredProductList;

    switch(action.type) {
        case SEARCH_TEXT:
            filteredProductList = _.filter(state.initialProductList, (product)=>{
                return product.name.indexOf(action.searchText) > -1 && (action.inStockOnly ? product.stocked : true);
            });
            return _.assign({}, state, {
                filteredProductList,
                searchText: action.searchText,
                inStockOnly: action.inStockOnly,
                totalPaymentAmount: _.round(_.sumBy(filteredProductList, (product)=> parseFloat(product.price)),2)
            });
        case CHECKOUT:
            return _.assign({}, state, {
                paymentAmount: parseFloat(action.paymentAmount)
            });
        default:
            return state;
    }
};

export default products;