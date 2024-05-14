import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    // 이름과 나이를 상태로 정의하고, if문으로 이름과 나이가 모두 입력되지 않았을 때 alert 처리하고 함수를 종료하는 로직을 작성하면 될 듯!
    if (!userName || !userAge) {
      alert("이름과 나이를 입력해주세요.");
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
    const newUser = {
      id: Date.now(),
      name: userName,
      age: userAge,
    };
    setUsers([...users, newUser]);
    setUserName("");
    setUserAge("");
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="이름"
        />
        <input
          type="number"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          placeholder="나이"
        />
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              border: "1px solid black",
            }}
          >
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>

            <button onClick={() => removeUser(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
