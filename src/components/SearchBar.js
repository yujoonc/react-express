import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value,
            this.inStockOnlyInput.checked
        );
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.searchText}
                    ref={(input) => this.filterTextInput = input}
                    onChange={ this.props.onFilter }
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref={(input) => this.inStockOnlyInput = input}
                        onChange={this.handleChange}
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
        searchText: state.search.searchText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onFilter: (searchText) => dispatch(filter(searchText))
    }
};

SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBar;