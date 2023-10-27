import Calculator from "../components/Calculator"

function Division() {
    return (
        <div>
            <p className="calculation-title">División de números</p>
            <Calculator operation={"/"}/>
        </div>
    )
}

export default Division