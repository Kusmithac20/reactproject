import React, { Component } from 'react'

export default class StateClass extends Component {
    
        constructor(props){
            super(props)
        
            this.state = {
                 name:"kusmitha",
                 count:0
            };
        }
        render() { 
            setTimeout(()=>{
                this.setState({
                    name:"kusmitha",
                })
            },
            2000
            )  
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <h1>Count:{this.state.count}</h1>
            </div>
        )
        }
}
