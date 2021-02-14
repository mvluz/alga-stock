import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        console.log('Component was created (componente foi criado)')
    },[])

    useEffect(() => {
        console.log('Age has been updated to (Idade foi atualizada para): ' + age)
    },[age])

    //console.log('second log')
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