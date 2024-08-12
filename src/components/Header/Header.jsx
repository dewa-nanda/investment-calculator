import investmentLogo from '../../assets/investment-calculator-logo.png'

const Header = () => {
    return (      
    <section>
        <img src={investmentLogo} className='size-[120px] mx-auto'/>
        <h1 className="text-3xl text-center mt-2 font-extrabold">
          Investment Calculator
        </h1>
    </section>)
}

export default Header;