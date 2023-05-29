import React from 'react';
import '../index.css';

const Buttons = () => (
  <div className="calculator">
    <div className="btn output">0</div>
    <span className="btn">AC</span>
    <span className="btn">+/-</span>
    <span className="btn">%</span>
    <span className="btn operations">&divide;</span>
    <span className="btn">7</span>
    <span className="btn">8</span>
    <span className="btn">9</span>
    <span className="btn operations">&times;</span>
    <span className="btn">4</span>
    <span className="btn">5</span>
    <span className="btn">6</span>
    <span className="btn operations">&minus;</span>
    <span className="btn">1</span>
    <span className="btn">2</span>
    <span className="btn">3</span>
    <span className="btn operations">+</span>
    <span className="btn zero">0</span>
    <span className="btn">.</span>
    <span className="btn operations">=</span>
  </div>
);

const Calculator = () => (
  <Buttons />
);

export default Calculator;
