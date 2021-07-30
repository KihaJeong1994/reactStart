import logo from './logo.svg';
import './App.css';
import { createRef, useMemo, useRef, useState } from 'react';

// useRef(디자인)
//dom을 변경할 때 사용
function App() {
  const myRef = useRef(null);
  const [list, setList] = useState([
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
  ]);
  const myRefs = Array.from({ length: list.length }).map(() => createRef()); // 특정길이의 x값으로만 이루어진 배열 생성

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef.current);
          myRef.current.style.backgroundColor = 'red';
          myRefs[0].current.style.backgroundColor = 'blue';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
