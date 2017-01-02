import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Checkout from './Checkout';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable />
                <Checkout />
            </div>
        );
    }
}

export default FilterableProductTable