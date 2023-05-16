import React, { useState } from 'react';
import Swal from 'sweetalert2'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [encodedValue, setEncodedValue] = useState('');
  const [encodedValue1, setEncodedValue1] = useState('');
  const [decodedValue, setDecodedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEncodeClick = () => {
    const encoded = encodeURIComponent(inputValue);
    navigator.clipboard.writeText("line://share?text="+encoded)
    Swal.fire("変換しコピーしました");
    setEncodedValue("変換しコピーしました");
  };

  const handleDecodeClick = () => {
    const decoded = decodeURIComponent(encodedValue1);
    navigator.clipboard.writeText(decoded)
    Swal.fire("変換しコピーしました");
    setDecodedValue(decoded);
  };

  const handleClearClick = () =>{
    setInputValue('');
  }

  const handleClear2Click = () =>{
    setEncodedValue1('');
  }

  const handleCameraClick = () =>{
    navigator.clipboard.writeText("line://nv/camera/")
    Swal.fire("コピーしました");
  }

  const handleOpenChatClick = () =>{
    navigator.clipboard.writeText("開発中です")
    Swal.fire("開発中です");
  }

  return (
    <div>
    <header>
      <h1><a href="https://aranpect.com">Aranpect</a></h1>
    </header>
    <div>
      <div className='width-50 left-color'>
        <p>下に変換したい文を入力</p>
        <input id="input" type="text" value={inputValue} onChange={handleInputChange} />
        <button className="m-3" onClick={handleEncodeClick}>変換する</button>
        <button className='clear m-3' onClick={handleClearClick}>入力をクリアします</button>
        {encodedValue && <p>{encodedValue}</p>}
      </div>
      <div className='width-50 right-color'>
        <p>下に直したい文章を入力</p>
        <input id="encoded" type="text" value={encodedValue1} onChange={(e) => setEncodedValue1(e.target.value)} />
        <button className="m-3" onClick={handleDecodeClick}>変換する</button>
        <button className='clear m-3' onClick={handleClear2Click}>入力をクリアします</button>
        {decodedValue && <p>{decodedValue}</p>}
      </div>
    </div>
    <section>
      <div className="syoukai">
        <h2 className='text-center'>サイトの使い方の紹介</h2>
        <p>このサイトでは、文字を入力することで、ラインの紹介テキストに変換することができます</p>
        <p>使い方は、変換したい文章を一番上の場所に入力し、変換ボタンをタップするだけです</p>
        <p>自動的にコピーされます</p>
        <p>また、変換した文章を戻すことも可能です</p>
        <p>上から2番めの場所に入力し変換ボタンを押すと直ります</p>
        <p>ぜひ、お友達にも拡散してくださいね</p>
      </div>
    </section>
    <section>
      <div>
        <h2>その他のコマンド一覧とコピーボタン(開発中)</h2>
        <div className='flex'>
          <div className='w-1/2'>
            <p>カメラ起動</p>
            <button onClick={handleCameraClick}>コピー</button>
          </div>
          <div className='w-1/2'>
            <p>オープンチャット参加</p>
            <button onClick={handleOpenChatClick}>コピー</button>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <p className="text-center">©2023 Aranpect All Right Reserved</p>
    </footer>
    </div>
  );
}

export default App;