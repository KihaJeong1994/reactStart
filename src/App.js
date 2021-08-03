import logo from './logo.svg';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

// useRef(디자인)
//dom을 변경할 때 사용
function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
