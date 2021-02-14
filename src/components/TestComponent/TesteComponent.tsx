import React, { useState } from 'react'
import './TestComponent.css'

/* Arrow function
const TestComponent = () => (
    <div className="TestComponent">TestComponent</div>
)
*/

/*
function TestComponent (props: {name: string})  {
    return <div className="TestComponent">
        Olá, {props.name}
    </div>
}
*/

function TestComponent (props: {name: string})  {
    /*
    const state = {
        age: 21
    }
    */
    const [age,setAge] = useState(32)

                             /*{state.age}*/
    return <div className="TestComponent">
        Olá, {props.name}, { age }
        <button onClick={() => {
            setAge(age + 1)
            //state.age++
            //console.log(state.age)
        }}>
            +
        </button>
    </div>
}

export default TestComponent