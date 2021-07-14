export const defaultState = {
    count : 0
}

export const CounterReducer = (state = defaultState,action) => {
   
    switch(action.type){
        case "inc":
            return  {...state,...action.payload}
        case "dec":
            return  {...state,...action.payload}
        default :
        return  {state}

    }
}


