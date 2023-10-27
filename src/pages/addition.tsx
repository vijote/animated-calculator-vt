import Calculator from "../components/Calculator"

function Addition() {

    return (
        <div>
            <p className="calculation-title">Suma de números</p>
            <Calculator operation={"+"}/>
        </div>
    )
}

export default Addition