import { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCount(by){
        setCount(count+by);
    }

    function decrementCount(by){
        setCount(count-by);
    }

    function reset()
    {
        setCount(0);
    }

    return (
        <>
            <div className="totalCount">
                <span>{count}</span>
            </div>
            <CounterButton by={1} incrementCountParent = {incrementCount} decrementCountParent = {decrementCount}/>
            <CounterButton by={2} incrementCountParent = {incrementCount} decrementCountParent = {decrementCount}/>
            <CounterButton by={5} incrementCountParent = {incrementCount} decrementCountParent = {decrementCount}/>
            <button className = "resetButton" onClick={reset}>Reset</button>
        </>

    );
}