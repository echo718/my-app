export const defaultState = {
    count : 0
}

export const CounterReducer = (state = defaultState,action) => {
   
    state.count = action.payload.count
    return  {...state};
}
