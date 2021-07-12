import React, {useReducer}from 'react';
import {CounterReducer,defaultState} from './CounterReducer';
import HookContext from './HookContext';
import ReactContext from './context/ReactContext';

let initialState  = 0

export default function HookReducer() {    
   
    const [state,action] = useReducer(CounterReducer,defaultState)

    return (
        <ReactContext.Provider value = { { state,action}}> 
            <div>
            <HookContext></HookContext>
            Cart : <button 
                        type="button" 
                        style={{margin:"10px"}}
                        onClick={ () => { action( {type:"inc",payload:{count:--initialState }} )}}>
                         -
                        </button>

                       {state.count}

                      <button 
                       type="button" 
                       style={{margin:"10px"}} 
                       onClick={ () => { action( {type:"inc",payload:{count:++initialState }} )}} >
                        +
                      </button>
        </div>
        </ReactContext.Provider>
       
    )
}
