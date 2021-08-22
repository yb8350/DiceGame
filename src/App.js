import Board from './Board';
import { useState } from 'react';
import Button from './Button';
import './App.scss'
import logo from './assets/logo.png';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  }
  const handClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return(
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
        <Button className="App-button" color='blue' onClick={handRollClick}>던지기</Button>
        <Button className="App-button" color='red' onClick={handClearClick}>처음부터</Button>
        </div>
      </div>
      <div className=".App-boards">
        <Board name="나" color="blue" gameHistory={myHistory}></Board>
        <Board name="상대" color="red" gameHistory={otherHistory}></Board>
      </div>
    </div>
  );
}

export default App;