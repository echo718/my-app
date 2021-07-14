import React, {useContext} from 'react';
import ReactContext from './context/ReactContext';

export default function HookContext() {
 
    const context  = useContext(ReactContext)
    console.log(context)

    return (
        <div style={{ margin:"10px" }} >
              <h2> Component 2</h2>
            items in Cart : {context.state.count}
        </div>
    )
}
