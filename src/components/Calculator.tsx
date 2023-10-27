interface CalculatorProps {
    operation: string
}

function Calculator(props: CalculatorProps) {
    return (
        <div className="calculator animate">
            <span className="calculator-number-display"></span>
            <div className="calculator-button-container">
                <button className="calculator-button">1</button>
                <button className="calculator-button">2</button>
                <button className="calculator-button">3</button>
                <button className="calculator-button">4</button>
                <button className="calculator-button">5</button>
                <button className="calculator-button">6</button>
                <button className="calculator-button">7</button>
                <button className="calculator-button">8</button>
                <button className="calculator-button">9</button>
                <button className="calculator-button special-button">{props.operation}</button>
                <button className="calculator-button">0</button>
                <button className="calculator-button special-button">=</button>
            </div>
        </div>
    )
}

export default Calculator