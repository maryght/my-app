
import { useState } from 'react'
import './countme.css'


function Counter(){
    let [number,SetNumber]=useState(0)
    function ButtonClick(){
        SetNumber(number+1)
}

    return(
        <div className= "countme">
        <button onClick={ButtonClick}>counter</button>
        <div className="number">{number}</div>
        </div>
    )
}

export default Counter