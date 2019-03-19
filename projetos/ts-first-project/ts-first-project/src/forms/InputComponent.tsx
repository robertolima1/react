import React, { Component } from 'react';


export default  class InputComponent extends Component<any, any>{

    render(){
        return(
            <div>
                <label htmlFor={this.props.name} className="form-label">{this.props.title}</label>
                <input
                    name={this.props.name}
                    type={this.props.type}  
                    id={this.props.id}>
                 </input>
            </div>
        )
    }
}