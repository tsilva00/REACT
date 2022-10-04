//var nome =  prompt('Qual o seu nome?');
//<h2>Bem-vindo(a) {nome}</h2>
const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} foto={props.foto} />
      <Social instagram={props.instagram} />
      <hr />
    </div>
  )
}

const Sobre = (props) => {
  return(
  <div>
     <img src={props.foto} width="140px"/>
    <h2>Olá, meu nome é {props.nome}</h2>
    <h3>Eu sou {props.cargo} da Empresa Stays</h3>
    <span>Tenho {props.idade} anos</span>
  </div>
  );
}

const Social = (props) => {
  return(
    <div>
      <a>Facebook</a>
      <a href={props.instagram} target="_blank">Instagram</a>
      <a>Linkedin</a>
      <a>Youtube</a>
    </div>
  );
}


export default function App() {
  return(
    <div>
      <h1>Conheça a nossa equipe:</h1>
      <Equipe nome="Thais" cargo="Estagiária" idade="24" instagram="https://google.com.br" foto="https://passport-photo.online/assets/merged/crOnTffg9ucDZ9nQk-Kh.webp"/>
      <Equipe nome="Matheus" cargo="Estagiária" idade="24"  foto="https://passport-photo.online/assets/merged/crOnTffg9ucDZ9nQk-Kh.webp"/>
      <Equipe nome="João" cargo="Estagiária" idade="24"  foto="https://passport-photo.online/assets/merged/crOnTffg9ucDZ9nQk-Kh.webp"/>
    </div>
  );
}
