import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      senha: '',
      email:'',
      error: '',
      sexo:'',
    }

    this.cadastrar = this.cadastrar.bind(this);
  }

cadastrar(event) {
  const {nome, senha, email} = this.state;

  if(nome !== '' && senha !== '' && email !== ''){
  alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
  } else{
    this.setState({error: 'Ops, parece que esta faltando algo!'})
  }

  event.preventDefault();
}

  render(){
    return(
      <div>
        <h1>Novo Usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          Nome:
          <input type="text" name="nome" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}/> <br />
          Email:
          <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/> <br />
          Senha:
          <input type="password" name="senha" value={this.state.senha} onChange={(event) => this.setState({senha: event.target.value})} /> <br />
          Sexo:
          <select value={this.state.sexo} onChange={(e) => this.setState({sexo: e.value.target})}>
            <option value="nenhum">--Selecione--</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="nao">Não informar</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>

        <div>
          <h2>{this.state.nome}</h2>
          <h2>{this.state.email}</h2>
          <h2>{this.state.senha}</h2>
        </div>
      </div>
    );
  }
}

export default App;
