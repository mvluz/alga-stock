import React from 'react'

class ClassComponent extends React.Component<{ name: string }> {

    state = {
        name: 'Mundo !!!'
    }

    render() {
       /* return <div>Olá {this.props.name}. Eu sou um compornente baseado em classe</div>*/
       return <div>
           <p>name : { this.state.name }</p>
           <button onClick={ () => {
               this.setState({name: 'Marcus'})
           } }> Click me</button>
       </div>
    }

}

export default ClassComponent