export const FilterReducer = (state: { filters: any }, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case 'RESET_DEPTH':
        case 'NEXT_DEPTH':
        case 'PREV_DEPTH':
        case 'UPDATE_VALUE':
            return {
                filters: {
                    ...state.filters,
                    ...action.payload
                }
            }
        default: return state;
    }
}