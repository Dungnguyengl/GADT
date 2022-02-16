import './App.css';
import {useContext} from 'react';
import {Data} from './Context/DataContext';
import Loading from './Components/Loading';
import Header from './Components/Header';
import Content from './Components/Content';
import { Container, Row } from 'react-bootstrap';
import Login from './Components/Login';

function App() {
  const { loading, login:{login:{isLogin}}} = useContext(Data)

  console.log(isLogin);

  return (
    !isLogin? 
    <Login />:
    loading ? 
    <Loading /> :
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Content />
      </Row>
    </Container>
  );
}

export default App;
