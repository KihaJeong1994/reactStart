import logo from './logo.svg';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// useRef(디자인)
//dom을 변경할 때 사용
function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}

export default App;
