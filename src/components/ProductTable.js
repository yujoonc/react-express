import React from 'react';
import { connect } from 'react-redux';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.filteredProductList.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialProductList: state.products.initialProductList,
        filteredProductList: state.products.filteredProductList
    };
}

ProductTable = connect(mapStateToProps)(ProductTable);

export default ProductTable;