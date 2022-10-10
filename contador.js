import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome:'Thais',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;

    state.contador += 1;
    this.setState(state)
  }

  diminuir() {
    let state = this.state;

    if(state.contador === 0) {
      alert("Opa, chegou a zero!");
      state.nome = 'Marina';
      this.setState(this);
      return;
    }
    state.contador -= 1;
    this.setState(state);
  }


  render(){
    return(
    <div>
      <h1>Bom dia! Seja bem-vindo(a) {this.state.nome}!</h1>

      <h3>Vamos contar:</h3>
      <h3><button onClick={this.diminuir}> - </button> {this.state.contador} <button onClick={this.aumentar}>+</button></h3>

    </div>
    );
  }
}

export default App;
