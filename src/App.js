import logo from './logo.svg';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';
import { useState } from 'react';

// useRef(디자인)
//dom을 변경할 때 사용
function App() {
  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
