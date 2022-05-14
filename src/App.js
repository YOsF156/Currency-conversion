
import './App.css';
import { useState } from 'react';
import InputAmount from './InputAmount'
function App() {
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(3.5);

  const convert = (e) => {
    if (e.target.value >= 0) {

      if (e.target.id === "fromAmount") {
        setFromAmount(e.target.value)
        setToAmount((e.target.value * 3.5).toFixed(2))
      } else {
        setToAmount(e.target.value)
        setFromAmount((e.target.value / 3.5).toFixed(2))
      }
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        currency convertor
      </header>
      <div className="body">
        <div className="inputs">

          <InputAmount id="fromAmount" lbl="USD" value={fromAmount} convert={convert} pH={"type $ currency here"} />
          <h4>
            <strong  >
              =
            </strong>
          </h4>
          <InputAmount id="toAmount" lbl="NIS" value={toAmount} convert={convert} pH={'type ₪ currency here'} />

        </div>
      </div>
    </div >
  );
}

export default App;
