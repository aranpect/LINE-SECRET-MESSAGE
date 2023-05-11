import React, { useState } from 'react';
import swal from 'sweetalert'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [encodedValue, setEncodedValue] = useState('');
  const [decodedValue, setDecodedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEncodeClick = () => {
    const encoded = encodeURIComponent(inputValue+"　君も使おう>>aranpectで検索<<");
    navigator.clipboard.writeText("line://"+encoded)
    swal("変換しコピーしました");
    setEncodedValue("変換しコピーしました");
  };

  const handleDecodeClick = () => {
    const decoded = decodeURIComponent(encodedValue);
    navigator.clipboard.writeText(decoded)
    Swal("変換しコピーしました");
    setEncodedValue("変換しコピーしました");
  };

  return (
    <div>
    <header>
      <h1><a href="https://aranpect.com">Aranpect</a></h1>
    </header>
    <div>
      <div className='width-50 left-color'>
        <label htmlFor="input">変える文をに入力:</label>
        <input id="input" type="text" size="40" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleEncodeClick}>変換する</button>
        {encodedValue && <p>変換したもの: {encodedValue}</p>}
      </div>
      <div className='width-50 right-color'>
        <label htmlFor="encoded">直す文を入力:</label>
        <input id="encoded" type="text" size="40" value={encodedValue} onChange={(e) => setEncodedValue(e.target.value)} />
        <button onClick={handleDecodeClick}>変換する</button>
        {decodedValue && <p>変換したもの: {decodedValue}</p>}
      </div>
    </div>
    <nav>
      <footer>
        <p>©Aranpect</p>
      </footer>
    </nav>
    </div>
  );
}

export default App;
