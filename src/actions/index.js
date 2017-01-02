
export const FILTER = 'FILTER';

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

export function filter(value) {
    return {
        type: FILTER,
        searchText: value
    };
}
