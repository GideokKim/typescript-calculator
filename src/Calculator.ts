export class Calculator {
    private currentValue: number = 0;
    private firstNumber: number | null = null;
    private operation: string | null = null;
    private waitingForSecondNumber: boolean = false;

    public inputNumber(num: number): void {
        if (this.waitingForSecondNumber) {
            this.currentValue = num;
            this.waitingForSecondNumber = false;
        } else {
            if (this.currentValue.toString().length < 3) {
                this.currentValue = this.currentValue * 10 + num;
            }
        }
    }

    public setOperation(operation: string): void {
        if (this.firstNumber === null) {
            this.firstNumber = this.currentValue;
        } else if (this.operation) {
            this.calculate();
        }
        this.operation = operation;
        this.waitingForSecondNumber = true;
    }

    public calculate(): number {
        if (this.firstNumber === null || this.operation === null) {
            return this.currentValue;
        }

        let result: number;
        switch (this.operation) {
            case '+':
                result = this.firstNumber + this.currentValue;
                break;
            case '-':
                result = this.firstNumber - this.currentValue;
                break;
            case '*':
                result = this.firstNumber * this.currentValue;
                break;
            case '/':
                if (this.currentValue === 0) {
                    throw new Error('Cannot divide by zero');
                }
                result = this.firstNumber / this.currentValue;
                break;
            default:
                return this.currentValue;
        }

        // 소수점 이하 버림
        result = Math.floor(result);
        
        // 결과를 현재 값으로 설정
        this.currentValue = result;
        this.firstNumber = null;
        this.operation = null;
        this.waitingForSecondNumber = false;

        return result;
    }

    public clear(): void {
        this.currentValue = 0;
        this.firstNumber = null;
        this.operation = null;
        this.waitingForSecondNumber = false;
    }

    public getCurrentValue(): number {
        return this.currentValue;
    }
} 