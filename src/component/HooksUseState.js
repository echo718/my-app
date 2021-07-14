import React,{useState} from 'react';

export default function HooksUseState() {

    const [title,setTitle] = useState("Welcome to Hooks world")
  
    const changeHooks = () => {
        setTitle("Bye! Hooks world")
        console.log("useState",title)
    }
   
    return (
        <div className="container">
            <h3 > {title} </h3>
            <button className="btn btn-warning m-2" type="button" onClick={changeHooks}>Quit</button>
        </div>
    )
}


