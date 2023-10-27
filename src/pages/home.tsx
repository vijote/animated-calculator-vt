import AnimLink from '../components/AnimLink'

function Home() {
    return (
        <div className='home-cta-container'>
            <AnimLink canAnimate className='button' to='/addition'>Sumar</AnimLink>
            <AnimLink canAnimate className='button' to='/substraction'>Restar</AnimLink>
            <AnimLink canAnimate className='button' to='/multiplication'>Multiplicar</AnimLink>
            <AnimLink canAnimate className='button' to='/division'>Dividir</AnimLink>
        </div>
    )
}

export default Home