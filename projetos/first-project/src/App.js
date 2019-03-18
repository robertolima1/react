import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {autores: [{nome:"Roberto ", sobrenome:"Lima"}, {nome:"Lourencio " , sobrenome: "Cavaquinho"}]};
  }


  render() {
    return (
      <div>
        <h1>Teste</h1>          
            {
              this.state.autores.map(function(autor){
                return(
                  <div>
                    <span>{autor.nome}</span>                  
                    <span>{autor.sobrenome}</span>
                  </div>
                );
              })
            }         
      </div>
    );
  }
}

export default App;
