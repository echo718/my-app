import React,{useState,useEffect} from 'react';

export default function Hooks() {

    const [title,setTitle] = useState("Welcome to Hooks world")
  
    const changeHooks = () => {
        setTitle("Bye! Hooks world")
        console.log("useState",title)
    }

    useEffect( () => {
         console.log("useEffect",title)        
     })

    return (
        <div>
           {title}   <button type="button" onClick={changeHooks}>Quit</button>
        </div>
    )
}

