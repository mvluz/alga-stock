import React from 'react'

class ClassComponent extends React.Component<{ name: string }> {

    constructor(props: any){
        super(props)
        console.log('Constructor reached (chegou no construtor)')
    }

    state = {
        name: 'Mundo !!!'
    }

    componentDidMount(){
        console.log('componentDidMount reached (chegou no componentDidMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate reached (chegou no componentDidUpdate')
    }

    render() {
       /* return <div>Olá {this.props.name}. Eu sou um compornente baseado em classe</div>*/

       console.log('Render reached (chegou no Render)')

       return <div>
           <p>name : { this.state.name }</p>
           <button onClick={ () => {
               this.setState({name: 'Marcus'})
           } }> Click me</button>
       </div>
    }

}

export default ClassComponent