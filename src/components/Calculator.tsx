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
        const current = parseInt(display);
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
            case '/': 
                if (second === 0) {
                    return Infinity;
                }
                return Math.floor(first / second);
            default: return second;
        }
    };

    const handleEquals = () => {
        if (firstNumber === null || operation === null) return;
        const current = parseInt(display);
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
                <button className="button" data-type="special" onClick={handleClear}>AC</button>
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
                <button className="button" data-type="equals" onClick={handleEquals} style={{ gridRow: 'span 3' }}>=</button>
                
                <button className="button" data-type="number" onClick={() => handleNumber('1')}>1</button>
                <button className="button" data-type="number" onClick={() => handleNumber('2')}>2</button>
                <button className="button" data-type="number" onClick={() => handleNumber('3')}>3</button>
                
                <button className="button" data-type="number" onClick={() => handleNumber('0')} style={{ gridColumn: 'span 3' }}>0</button>
            </div>
        </div>
    );
}; 