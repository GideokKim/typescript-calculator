import { Calculator } from './Calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize with 0', () => {
        expect(calculator.getCurrentValue()).toBe(0);
    });

    test('should add two numbers', () => {
        calculator.inputNumber(5);
        calculator.setOperation('+');
        calculator.inputNumber(3);
        expect(calculator.calculate()).toBe(8);
    });

    test('should subtract two numbers', () => {
        calculator.inputNumber(10);
        calculator.setOperation('-');
        calculator.inputNumber(4);
        expect(calculator.calculate()).toBe(6);
    });

    test('should multiply two numbers', () => {
        calculator.inputNumber(6);
        calculator.setOperation('*');
        calculator.inputNumber(7);
        expect(calculator.calculate()).toBe(42);
    });

    test('should divide two numbers', () => {
        calculator.inputNumber(15);
        calculator.setOperation('/');
        calculator.inputNumber(3);
        expect(calculator.calculate()).toBe(5);
    });

    test('should clear calculator', () => {
        calculator.inputNumber(123);
        calculator.clear();
        expect(calculator.getCurrentValue()).toBe(0);
    });

    test('should limit input to 3 digits', () => {
        calculator.inputNumber(1);
        calculator.inputNumber(2);
        calculator.inputNumber(3);
        calculator.inputNumber(4); // This should be ignored
        expect(calculator.getCurrentValue()).toBe(123);
    });

    test('should floor decimal results', () => {
        calculator.inputNumber(10);
        calculator.setOperation('/');
        calculator.inputNumber(3);
        expect(calculator.calculate()).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
        calculator.inputNumber(10);
        calculator.setOperation('/');
        calculator.inputNumber(0);
        expect(() => calculator.calculate()).toThrow('Cannot divide by zero');
    });
}); 