import {useState, useEffect} from "react";
export default function App(){
    const[count, setCount]=useState(0);
    useEffect(() =>{
        console.log("Count changed:",count);


    },[count]);
    return(
        <div>
        <h1>123</h1>
        <p>count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>decrease</button>
        </div>
    );

}

