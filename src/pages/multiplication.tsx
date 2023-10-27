import Calculator from "../components/Calculator"

function Multiplication() {
    return (
        <div>
            <p className="calculation-title">Multiplicación de números</p>
            <Calculator operation={"*"}/>
        </div>
    )
}

export default Multiplication