
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const CHECKOUT = 'CHECKOUT';

/*export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}*/

export function searchText(text, inStockOnly) {
    return {
        type: SEARCH_TEXT,
        searchText: text,
        inStockOnly: inStockOnly
    };
}

export function checkout(paymentAmount) {
    return {
        type: CHECKOUT,
        paymentAmount: paymentAmount
    };
}