import React, { Component } from 'react';
import  {ILivros} from "./ILivros";




export default class Livros extends Component<ILivros,any> {
    render() {
      return (
          <div>
            <span>Nome é: {this.props.name}</span>
            <span>Autor:{this.props.autor}</span>
            <span>Autor:{this.props.ano}</span>
          </div>
        );
    }
}