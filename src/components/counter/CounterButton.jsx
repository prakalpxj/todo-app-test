// import { useState } from "react";
import "./Counter.css"
import {PropTypes} from "prop-types"


export default function CounterButton({by,incrementCountParent, decrementCountParent}){
    
    // const [count, setCount] = useState(0);     //deconstructing the array being returned from useState()
    

    // function incrementCounter(){        
    //     // setCount(count+by);
    //     incrementCountParent(by);
    // }

    // function decrementCounter(){        
    //     // setCount(count-by);
    //     decrementCountParent(by);
    // }

    return (
        <>
            <div>
                <button className="counterButton" onClick={() => incrementCountParent(by)}>+{by}</button>
                <button className="counterButton" onClick={() => decrementCountParent(by)}>-{by}</button>
            </div>
        </>
    );
}

CounterButton.propTypes = {
    by : PropTypes.number
}