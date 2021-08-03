import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

const HomePage = () => {
  //http 요청(fetch, axios(다운))
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  // 2번째 파라미터가 빈 배열이면 최초 한 번만 실행
  useEffect(() => {
    //다운로드 가정 = fetch(), axios()
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 1, title: '제목2', content: '내용2' },
      { id: 1, title: '제목3', content: '내용3' },
    ];

    //비동기 식이면 빈 데이터가 들어갈 수 있음 => 반드시 상태값 const 여야함
    setBoards([...data]);
    setUser({ id: 1, username: 'cos' });
  }, []);
  return (
    <div>
      <Header />
      <Home
        boards={boards}
        number={number}
        setBoards={setBoards}
        setNumber={setNumber}
        user={user}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
