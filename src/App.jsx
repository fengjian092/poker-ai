import React, { useState } from 'react';

const App = () => {
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState('');

  const addResult = (res) => {
    setHistory([...history, res]);
  };

  const clearHistory = () => {
    setHistory([]);
    setResult('');
  };

  const simulate = () => {
    if (history.length === 0) {
      setResult('請先輸入歷史結果');
      return;
    }

    let bankerWins = 0;
    let playerWins = 0;
    let tieWins = 0;

    // 模擬100局
    for (let i = 0; i < 100; i++) {
      const rand = Math.random();
      if (rand < 0.45) bankerWins++;
      else if (rand < 0.9) playerWins++;
      else tieWins++;
    }

    const max = Math.max(bankerWins, playerWins, tieWins);
    let predict = '';
    if (max === bankerWins) predict = '莊';
    else if (max === playerWins) predict = '閒';
    else predict = '和';

    setResult(`預測下一局結果：${predict} (模擬100局勝率最高)`);
  };

  return (
    <div className="container">
      <h1>百家樂 AI 預測器</h1>
      <div className="button-group">
        <button onClick={() => addResult('莊')}>輸入「莊」</button>
        <button onClick={() => addResult('閒')}>輸入「閒」</button>
        <button onClick={() => addResult('和')}>輸入「和」</button>
        <button onClick={clearHistory}>清除歷史</button>
      </div>
      <div className="result">
        <p>已輸入歷史結果：{history.join('、')}</p>
      </div>
      <div className="button-group">
        <button onClick={simulate}>開始AI預測</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default App;
