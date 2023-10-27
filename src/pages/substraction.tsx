import Calculator from "../components/Calculator"

function Substraction() {
    return (
        <div>
            <p className="calculation-title">Resta de números</p>
            <Calculator operation={"-"}/>
        </div>
    )
}

export default Substraction