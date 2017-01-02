import React from 'react';
import { connect } from 'react-redux';
import { searchText } from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeFilterText = this.onChangeFilterText.bind(this);
        this.onChangeFilterInStock = this.onChangeFilterInStock.bind(this);
    }

    onChangeFilterText(e) {
        this.props.onChangeFilter(e.target.value, this.props.inStockOnly);
    }

    onChangeFilterInStock(e) {
        this.props.onChangeFilter(this.props.searchText, !this.props.inStockOnly);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.searchText}
                    onChange={this.onChangeFilterText}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.onChangeFilterInStock}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        searchText: state.products.searchText,
        inStockOnly: state.products.inStockOnly
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (filterText, inStockOnly) => dispatch(searchText(filterText,inStockOnly))
    }
};

SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBar;