export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [...state.transaction, action.payload]
            };
        case 'SET_FILTER':
            // Add your filter logic here
            return state;
        default:
            return state;
    }
};
