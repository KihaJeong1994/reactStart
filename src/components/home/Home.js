import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//스타일 확장
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`;
//props 자식에게 데이터, 함수를 넘기는 방법
const Home = (props) => {
  //구조분할 할당(함수도 넘길 수 있음)
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <StyledAddButton user={user}>추가버튼</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      <h1>홈:{number}</h1>
      <button onClick={() => setNumber(number + 1)}> 번호증가</button>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
