import React, {useContext} from 'react';
import ReactContext from './context/ReactContext';

export default function HookContext() {
 
    const context  = useContext(ReactContext)
    return (
        <div>
            items in Cart : {context.state.count}
        </div>
    )
}
