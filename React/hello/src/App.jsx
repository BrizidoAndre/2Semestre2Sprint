import './App.css';
import CardEvento from './components/CardEvento/CardEvento';
import Title from "./components/Title/Title";
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <h1> Hello World React</h1>
     <Title nome="André" sobrenome="Brizido Basilio" />
     <br />
     <Container>
      <CardEvento titulo="SQL Server" descricao="Evento referente ao como que fala quando você está iniciando introdução ao banco de dados sql server" link="Assinar"/>
      <CardEvento titulo="C#" descricao="Evento de treineiros C#" link="Conectar" />
      <CardEvento/>
     </Container>
    </div>
  );
}

export default App;
