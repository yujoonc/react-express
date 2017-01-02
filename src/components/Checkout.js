import React from 'react';
import { connect } from 'react-redux';
import { checkout } from '../actions';

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.onChangePaymentAmountInput = this.onChangePaymentAmountInput.bind(this);
    }

    onChangePaymentAmountInput(e) {
        if(e.target.value === ''){
            this.props.onChangePaymentAmount(0);
        }else{
            this.props.onChangePaymentAmount(e.target.value);
        }
    }

    render() {

        let remainingAmount = parseFloat(this.props.totalPaymentAmount) - parseFloat(this.props.paymentAmount);
        return (
            <div>
                <h2>
                    TOTAL AMOUNT:
                    {this.props.totalPaymentAmount}
                </h2>
                <input
                    type="text"
                    placeholder="Pay"
                    value={this.props.paymentAmount}
                    onChange={this.onChangePaymentAmountInput}
                />
                <h2>
                    PAID AMOUNT:
                    {this.props.paymentAmount}
                </h2>
                <h2>
                    REMAINING AMOUNT:
                    {remainingAmount}
                </h2>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        totalPaymentAmount: state.products.totalPaymentAmount,
        paymentAmount: state.products.paymentAmount,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChangePaymentAmount: (paymentAmount) => dispatch(checkout(paymentAmount))
    }
};

Checkout = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default Checkout;