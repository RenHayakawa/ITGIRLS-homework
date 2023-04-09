import './App.css';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleValidate = (e) => {
    if (inputValue === "") {
      alert("Заполните инпут");
    }
    else {
      alert("Отправлено");
      setInputValue("")
    }
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleValidate}>Отправить</button>
    </div>
  );
}

export default App;
