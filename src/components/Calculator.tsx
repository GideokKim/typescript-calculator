import React, { useState } from 'react';
import './Calculator.css';

export const Calculator: React.FC = () => {
    const [display, setDisplay] = useState('0');
    const [firstNumber, setFirstNumber] = useState<number | null>(null);
    const [operation, setOperation] = useState<string | null>(null);
    const [newNumber, setNewNumber] = useState(true);

    const handleNumber = (num: string) => {
        if (newNumber) {
            setDisplay(num);
            setNewNumber(false);
        } else {
            setDisplay(display === '0' ? num : display + num);
        }
    };

    const handleOperator = (op: string) => {
        const current = parseFloat(display);
        if (firstNumber === null) {
            setFirstNumber(current);
        } else if (operation) {
            const result = calculate(firstNumber, current, operation);
            setFirstNumber(result);
            setDisplay(String(result));
        }
        setOperation(op);
        setNewNumber(true);
    };

    const calculate = (first: number, second: number, op: string): number => {
        switch (op) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '/': return first / second;
            default: return second;
        }
    };

    const handleEquals = () => {
        if (firstNumber === null || operation === null) return;
        const current = parseFloat(display);
        const result = calculate(firstNumber, current, operation);
        setDisplay(String(result));
        setFirstNumber(null);
        setOperation(null);
        setNewNumber(true);
    };

    const handleClear = () => {
        setDisplay('0');
        setFirstNumber(null);
        setOperation(null);
        setNewNumber(true);
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                <button className="button" data-type="special" onClick={handleClear}>C</button>
                <button className="button" data-type="operator" onClick={() => handleOperator('/')}>/</button>
                <button className="button" data-type="operator" onClick={() => handleOperator('*')}>×</button>
                <button className="button" data-type="operator" onClick={() => handleOperator('-')}>-</button>
                
                <button className="button" data-type="number" onClick={() => handleNumber('7')}>7</button>
                <button className="button" data-type="number" onClick={() => handleNumber('8')}>8</button>
                <button className="button" data-type="number" onClick={() => handleNumber('9')}>9</button>
                <button className="button" data-type="operator" onClick={() => handleOperator('+')}>+</button>
                
                <button className="button" data-type="number" onClick={() => handleNumber('4')}>4</button>
                <button className="button" data-type="number" onClick={() => handleNumber('5')}>5</button>
                <button className="button" data-type="number" onClick={() => handleNumber('6')}>6</button>
                <button className="button" data-type="number" onClick={() => handleNumber('0')}>0</button>
                
                <button className="button" data-type="number" onClick={() => handleNumber('1')}>1</button>
                <button className="button" data-type="number" onClick={() => handleNumber('2')}>2</button>
                <button className="button" data-type="number" onClick={() => handleNumber('3')}>3</button>
                <button className="button" data-type="equals" onClick={handleEquals}>=</button>
            </div>
        </div>
    );
}; 