import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {
        nome: '',
        senha: '',
        email:'',
        error: '',
        sexo:''
      }
    }
    this.mudarDados = this.mudarDados.bind(this);
  }

  mudarDados(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
          Nome:
          <input type="text" name="nome" value={this.state.formnome} onChange={this.mudarDados}/> <br />
          Email:
          <input type="email" name="email" value={this.state.form.email} onChange={this.mudarDados}/> <br />
          Senha:
          <input type="password" name="senha" value={this.state.form.senha} onChange={this.mudarDados} /> <br />
          Sexo:
          <select name="sexo" value={this.state.form.sexo} onChange={this.mudarDados}>
            <option value="nenhum">--Selecione--</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="nao">Não informar</option>
          </select>

        <div>
          <h2>{this.state.form.nome}</h2>
          <h2>{this.state.form.email}</h2>
          <h2>{this.state.form.senha}</h2>
          <h2>{this.state.form.sexo}</h2>
        </div>
      </div>
    );
  }
}

export default App;
