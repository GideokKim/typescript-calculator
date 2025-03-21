import React, { useState } from 'react';
import { Calculator } from '../Calculator';
import './CalculatorUI.css';

export const CalculatorUI: React.FC = () => {
    const [calculator] = useState(() => new Calculator());
    const [display, setDisplay] = useState('0');

    const handleNumberClick = (num: number) => {
        calculator.inputNumber(num);
        setDisplay(calculator.getCurrentValue().toString());
    };

    const handleOperationClick = (operation: string) => {
        calculator.setOperation(operation);
        setDisplay(calculator.getCurrentValue().toString());
    };

    const handleCalculate = () => {
        try {
            const result = calculator.calculate();
            setDisplay(result.toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    const handleClear = () => {
        calculator.clear();
        setDisplay('0');
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                <div className="row">
                    <button onClick={() => handleNumberClick(7)}>7</button>
                    <button onClick={() => handleNumberClick(8)}>8</button>
                    <button onClick={() => handleNumberClick(9)}>9</button>
                    <button onClick={() => handleOperationClick('/')}>/</button>
                </div>
                <div className="row">
                    <button onClick={() => handleNumberClick(4)}>4</button>
                    <button onClick={() => handleNumberClick(5)}>5</button>
                    <button onClick={() => handleNumberClick(6)}>6</button>
                    <button onClick={() => handleOperationClick('*')}>×</button>
                </div>
                <div className="row">
                    <button onClick={() => handleNumberClick(1)}>1</button>
                    <button onClick={() => handleNumberClick(2)}>2</button>
                    <button onClick={() => handleNumberClick(3)}>3</button>
                    <button onClick={() => handleOperationClick('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => handleNumberClick(0)}>0</button>
                    <button onClick={handleClear}>AC</button>
                    <button onClick={handleCalculate}>=</button>
                    <button onClick={() => handleOperationClick('+')}>+</button>
                </div>
            </div>
        </div>
    );
}; 