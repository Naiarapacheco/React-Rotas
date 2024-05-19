import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="App">
        <h1>Bem vindo a página HOME</h1>
        <br/>
        <hr/>
        <Link to='/produto/12345'>Acessar Produto 12345</Link>
      </div>
    );
  }
  
  export default Home;