import { useState } from 'react';
import calculate from '../logic/calculate';

const Buttons = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const click = (e) => {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <>
      <div className="btn output">
        {total}
        {operation}
        {next}
      </div>
      <button onClick={click} type="button" className="btn">AC</button>
      <button onClick={click} type="button" className="btn">+/-</button>
      <button onClick={click} type="button" className="btn">%</button>
      <button onClick={click} type="button" className="btn operations">÷</button>
      <button onClick={click} type="button" className="btn">7</button>
      <button onClick={click} type="button" className="btn">8</button>
      <button onClick={click} type="button" className="btn">9</button>
      <button onClick={click} type="button" className="btn operations">x</button>
      <button onClick={click} type="button" className="btn">4</button>
      <button onClick={click} type="button" className="btn">5</button>
      <button onClick={click} type="button" className="btn">6</button>
      <button onClick={click} type="button" className="btn operations">-</button>
      <button onClick={click} type="button" className="btn">1</button>
      <button onClick={click} type="button" className="btn">2</button>
      <button onClick={click} type="button" className="btn">3</button>
      <button onClick={click} type="button" className="btn operations">+</button>
      <button onClick={click} type="button" className="btn zero">0</button>
      <button onClick={click} type="button" className="btn">.</button>
      <button onClick={click} type="button" className="btn operations">=</button>
    </>
  );
};

const Calculator = () => (
  <div className="cal">
    <div className="math">
      <h2 className="math-text">Let&apos;s do some math</h2>
    </div>
    <div className="calculator">
      <Buttons />
    </div>
  </div>
);

export default Calculator;
